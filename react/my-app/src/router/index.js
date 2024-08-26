// Імпортуємо необхідні залежності
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Імпортуємо компоненти, які будуть відображатися на різних маршрутах
import ImgNASA from '../views/ImgNASA/ImgNASA';
import NASAImageDetails from '../views/NASAImageDetails/NASAImageDetails';

// Створюємо екземпляр маршрутизатора
const router = createBrowserRouter([
  {
    // Маршрут для кореневого URL ("/")
    path: '/',
    // Відображаємо компонент NASAImages на цьому маршруті
    element: <ImgNASA />,
  },
  {
    // Маршрут для URL, що починаються з "/details/" і містять динамічний параметр ":nasaId"
    path: '/details/:nasaId',
    // Відображаємо компонент NASAImageDetails на цьому маршруті
    element: <NASAImageDetails />,
  },
]);

// Експортуємо екземпляр маршрутизатора для використання в інших частинах програми
export default router;