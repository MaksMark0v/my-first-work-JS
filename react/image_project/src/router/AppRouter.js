import React from 'react';
import { createBrowserRouter} from 'react-router-dom';

import ImageGallery from '../views/ImageGallery/ImageGallery';
import ImageDetailsPage from '../views/ImageDetailsPage/ImageDetailsPage';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <ImageGallery />
    },
    {
        path: '/image/:id',
        element: <ImageDetailsPage />
    },
    {
        path: '*',
        element: <div>Page Not Found</div>
    }
]);

// const AppRouter = () => {
//     return <RouterProvider router={router} />;
// };

export default AppRouter;
