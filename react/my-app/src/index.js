import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap-config.scss';
import { RouterProvider } from 'react-router-dom';
import IndexRouter from './router';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={IndexRouter} />    
  </React.StrictMode>
);


