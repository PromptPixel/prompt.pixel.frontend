import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from '@/app/provider/store';
import { viewport, miniApp, postEvent } from '@telegram-apps/sdk-react';


const App: React.FC = () => {
  useEffect(() => {
    if (viewport.mount.isAvailable()) {
      // После монтирования попробуем развернуть
      viewport.expand?.();
      viewport.requestFullscreen?.();
      postEvent('web_app_setup_swipe_behavior', { allow_vertical_swipe: false });
    }
    // Меняем цвет Telegram-хедера (на случай, если он виден)
    miniApp.setHeaderColor?.('#ffffff');
  }, []);

  const handleClose = () => {
    if (miniApp.close.isAvailable()) {
      miniApp.close();
    }
  };

  return (
    <Provider store={store}>
      <header style={headerStyle}>
        <h1>Мой кастомный хедер</h1>
        <button onClick={handleClose}>✕</button>
      </header>
      <main style={{ paddingTop: '60px' }}>
        <p>Контент приложения</p>
      </main>
    </Provider>
  );
}

export default App;

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '60px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
  zIndex: 1000,
};