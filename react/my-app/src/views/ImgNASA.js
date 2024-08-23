import React, { useState, useEffect } from 'react'; // Імпортуємо React та два його хуки: useState та useEffect

const NASA_IMAGE_API = 'https://images-api.nasa.gov/search?q=mars'; // Константа з URL API NASA для пошуку зображень Марса

function NasaImages() { // Функціональний компонент NasaImages
  const [images, setImages] = useState([]); // Створили стан images, який є порожнім масивом, та функцію setImages для оновлення цього стану

  useEffect(() => { // Хук useEffect, який виконується при монтуванні компонента
    async function fetchNasaImages() { // Асинхронна функція для отримання зображень з API NASA
      const response = await fetch(NASA_IMAGE_API); // Відправляємо запит до API NASA
      const data = await response.json(); // Перетворюємо відповідь на JSON
      setImages(data.collection.items); // Оновлюємо стан images отриманими даними
    }
    fetchNasaImages(); // Виконуємо функцію fetchNasaImages
  }, []) // Хук useEffect буде виконуватися лише один раз при монтуванні компонента, тому що другий аргумент - порожній масив

  return ( // Повертаємо JSX-елемент
    <div>
      <h1>Зображення NASA</h1> 
      <ul>
        {images.length === 0 && <p>Завантаження...</p>}  {/*// Якщо масив images порожній, то відображаємо повідомлення "Завантаження..."  */}
        {images.map((image, index) => ( // Перебираємо масив images та відображаємо кожне зображення
          <img
            key={index} // Ключ для кожного елемента масиву
            src={image.links && image.links.length !== 0 && image.links[0].href} // URL зображення
          />
        ))}
      </ul>
    </div>
  );
}

export default NasaImages; // Експортуємо компонент NasaImages за замовчуванням