import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from '@/app/provider/store';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>Images</h1>
    </div>
  </Provider>
);

export default App;