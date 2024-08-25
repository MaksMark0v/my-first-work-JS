// Імпортуємо React та PropTypes для перевірки типів пропсів
import React from 'react';
import PropTypes from 'prop-types';

// Оголошуємо функціональний компонент KeywordsBadges
const KeywordsBadges = ({ keywords }) => {
  // Оголошуємо змінну limitedKeywords, яка буде містити не більше 5 слів-ключів
  const limitedKeywords =
    keywords.length > 5
      ? keywords.slice(0, 5).map((keyword) => keyword.slice(0, 20))
      : keywords.map((keyword) => keyword.slice(0, 20));

  // Рендеримо контейнер з класом d-flex flex-wrap, який буде містити бейджі
  return (
    <div className="d-flex flex-wrap">
      {/*  Перебираємо масив limitedKeywords та рендеримо бейдж для кожного слова-ключа */}
      {limitedKeywords.map((keyword, index) => (
        // Кожен бейдж отримує унікальний ключ, клас bg-secondary для стилювання та текст слова-ключа
        <span key={index} className="badge bg-secondary me-1 mb-1">
          {keyword}
        </span>
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
