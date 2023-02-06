import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/footer';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
    <Footer />
  </React.StrictMode>
);
