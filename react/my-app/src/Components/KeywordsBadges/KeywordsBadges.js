// Імпортуємо React та PropTypes для перевірки типів пропсів
import React from 'react';
import PropTypes from 'prop-types';

// Оголошуємо функціональний компонент KeywordsBadges
const KeywordsBadges = ({ keywords }) => {
  // Ініціалізуємо порожній масив для зберігання оброблених ключових слів
let limitedKeywords = [];

// Ітеруємо по масиву ключових слів
keywords.forEach((keyword) => {
  // Перевіряємо, чи містить ключове слово кому (",")
  if (!keyword.includes(',')) {
    // Якщо ні, додаємо його до масиву оброблених ключових слів
    limitedKeywords.push(keyword);
    return;
  }
  
  // Якщо ключове слово містить кому, розбиваємо його на масив окремих ключових слів
  keyword.split(',').forEach((keyword) => {
    // Додаємо кожне окреме ключове слово до масиву оброблених ключових слів
    limitedKeywords.push(keyword);
  });
});

// Обмежуємо кількість ключових слів до 5, якщо їх більше
limitedKeywords = limitedKeywords.length > 5 ? limitedKeywords.slice(0, 5) : limitedKeywords;
  return (
    <div className="d-flex flex-wrap">
      {/*  Перебираємо масив limitedKeywords та рендеримо бейдж для кожного слова-ключа */}
      {limitedKeywords.map((keyword, index) => (
        // Кожен бейдж отримує унікальний ключ, клас bg-secondary для стилювання та текст слова-ключа
        <a
          // Призначити унікальний ключ елементу, який допомагає React відстежувати його
          key={index}
          // Встановити атрибут href до URL-адреси пошуку Google з закодованим ключовим словом
          href={`https://www.google.com/search?q=${encodeURIComponent(
            keyword
          )}`}
          // Відкрити посилання в новій вкладці або вікні
          target="_blank"
          // Додати функції безпеки, щоб запобігти доступу до контексту поточної сторінки з боку відкритої сторінки
          rel="noopener noreferrer"
          // Застосувати класи CSS Bootstrap для стилювання елементу як первинного бейджа з відступами
          className="badge bg-primary me-1 mb-1 overflou-hidden"
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
