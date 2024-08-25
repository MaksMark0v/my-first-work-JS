import React, { useState, useEffect } from 'react'; // Імпортуємо React та два його хуки: useState та useEffect

import KeywordsBadges from '../../Components/KeywordsBadges/KeywordsBadges';

import './ImgNASA.css'

const NASA_IMAGE_API = 'https://images-api.nasa.gov/search?q=mars'; // Константа з URL API NASA для пошуку зображень Марса

function NasaImages() {
  // Функціональний компонент NasaImages
  const [images, setImages] = useState([]); // Створили стан images, який є порожнім масивом, та функцію setImages для оновлення цього стану
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Хук useEffect, який виконується при монтуванні компонента
    async function fetchNasaImages() {
      // Асинхронна функція для отримання зображень з API NASA
      const response = await fetch(NASA_IMAGE_API); // Відправляємо запит до API NASA
      const data = await response.json(); // Перетворюємо відповідь на JSON
      setIsLoading(false);
      setImages(data.collection.items); // Оновлюємо стан images отриманими даними
    }
    fetchNasaImages(); // Виконуємо функцію fetchNasaImages
  }, []); // Хук useEffect буде виконуватися лише один раз при монтуванні компонента, тому що другий аргумент - порожній масив

  return (
    // Повертаємо JSX-елемент
    <div className="conteiner">
      <h1 className="d-flex justify-content-center text-info">
        Зображення NASA
      </h1>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Завантаження...</span>
          </div>
        </div>
      ) : (
        //  Якщо масив images порожній, то відображаємо повідомлення "Завантаження..."
        <div className="row g-5" >
          {/* Перебираємо масив зображень та рендеримо картку для кожного зображення */}
          {images.map((image, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow">
                <img
                  className="card-img-top h-210 object-fit-cover "
                  src={
                    image.links &&
                    image.links.length !== 0 &&
                    image.links[0].href
                  }
                  //  Посилання на зображення
                />
                <div className="card-body">
                  <KeywordsBadges keywords={image.data && image.data[0] && image.data[0].keywords} />
                  <h5 className="card-title">
                    {image.data && image.data[0] && image.data[0].title}
                    {/* Назва зображення  */}
                  </h5>
                  <p className="card-text h-210  text-truncate text-wrap" >
                    {image.data && image.data[0] && image.data[0].description}
                    {/* Опис зображення */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NasaImages; // Експортуємо компонент NasaImages за замовчуванням
