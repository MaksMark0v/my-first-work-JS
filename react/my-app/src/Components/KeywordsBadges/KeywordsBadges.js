// Імпортуємо React та PropTypes для перевірки типів пропсів
import React from 'react';
import PropTypes from 'prop-types';

// Оголошуємо функціональний компонент KeywordsBadges
const KeywordsBadges = ({ keywords }) => {
  // Оголошуємо змінну limitedKeywords, яка буде містити не більше 5 слів-ключів
  const limitedKeywords =
    // Перевірити, чи довжина масиву keywords більше 5
    keywords.length > 5
      // Якщо так, то взяти перші 5 елементів масиву keywords
      ? keywords.slice(0, 5)
        // та для кожного елементу масиву взяти перші 20 символів (обрізати довжину ключового слова до 20 символів)
        .map((keyword) => keyword.slice(0, 20))
      // Якщо довжина масиву keywords не більше 5, то взяти весь масив
      : keywords
        // та для кожного елементу масиву взяти перші 20 символів (обрізати довжину ключового слова до 20 символів)
        .map((keyword) => keyword.slice(0, 20));

  // Рендеримо контейнер з класом d-flex flex-wrap, який буде містити бейджі
  return (
    <div className="d-flex flex-wrap">
      {/*  Перебираємо масив limitedKeywords та рендеримо бейдж для кожного слова-ключа */}
      {limitedKeywords.map((keyword, index) => (
        // Кожен бейдж отримує унікальний ключ, клас bg-secondary для стилювання та текст слова-ключа
        <a
          // Призначити унікальний ключ елементу, який допомагає React відстежувати його
          key={index}

          // Встановити атрибут href до URL-адреси пошуку Google з закодованим ключовим словом
          href={`https://www.google.com/search?q=${encodeURIComponent(keyword)}`}

          // Відкрити посилання в новій вкладці або вікні
          target="_blank"

          // Додати функції безпеки, щоб запобігти доступу до контексту поточної сторінки з боку відкритої сторінки
          rel="noopener noreferrer"

          // Застосувати класи CSS Bootstrap для стилювання елементу як первинного бейджа з відступами
          className="badge bg-primary me-1 mb-1"
        >
          {/*  Показати ключове слово як текстовий вміст елементу */}
          {keyword}
        </a>
      ))}
    </div>
  );
};

// Визначаємо тип пропса keywords як масив
KeywordsBadges.propTypes = {
  keywords: PropTypes.array,
};

// Експортуємо компонент KeywordsBadges за замовчуванням
export default KeywordsBadges;
