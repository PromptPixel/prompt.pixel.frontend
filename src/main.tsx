
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App/ui/App';
import { init, miniApp } from '@telegram-apps/sdk-react';

// Инициализация SDK
init();

// Монтируем miniApp синхронно
if (miniApp.mountSync.isAvailable()) {
  miniApp.mountSync();
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
