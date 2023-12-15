import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'; // Redux store'unu import edin
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Provider'ı import edin

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}> {/* Provider ile Redux store'unu sağlayın */}
    <BrowserRouter basename="/react-deploy-test">
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
