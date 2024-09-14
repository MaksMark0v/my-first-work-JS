import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ImageDetails from '../views/ImageDetails/ImageDetails';
import ImageDetailsPage from '../views/ImageDetailsPage/ImageDetailsPage';


const AppRouter = createBrowserRouter([
    {
        path: '/',
        element : <ImageDetails />
    
    },
    {
        path: '/image/:id',
        element : <ImageDetailsPage />
        // component: ImageDetailsPage
    },
    {
        path: '*',
        component: () => <div>Page Not Found</div>
    }
 //...more routes here if needed
]) 


export default AppRouter;
