
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App/ui/App';
import { init, miniApp, viewport } from '@telegram-apps/sdk-react';

// Инициализация SDK
init();
if (miniApp.mountSync.isAvailable()) {
  miniApp.mountSync();
  if (miniApp.ready.isAvailable()) miniApp.ready();
}

if (viewport.mount.isAvailable()) {
  viewport.mount();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
