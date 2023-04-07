import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const domElement = document.getElementById('root');

if (domElement) {
  const root = ReactDOM.createRoot(domElement);
  root.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    // </React.StrictMode>
  );

}

