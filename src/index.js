import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';

import { SearchContextProvider } from './context/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     <SearchContextProvider>
 <App />
  </SearchContextProvider>
  </React.StrictMode>
);
