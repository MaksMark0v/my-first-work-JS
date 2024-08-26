import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import ImgNASA from '../views/ImgNASA/ImgNASA';
import NASAImageDetails from '../views/NASAImageDetails/NASAImafeDetails';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <ImgNASA />,
  },
  {
    path: 'details',
    element: <NASAImageDetails />,
  },
]);

export default Router; 