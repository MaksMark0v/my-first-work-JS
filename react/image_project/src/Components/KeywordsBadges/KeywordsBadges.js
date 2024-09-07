import React from 'react';


const KeywordsBadges = ({ authors }) => {
  return (
    <div className="">
      {authors.map((author, index) => (
        <span key={index} >
          {author}
        </span>
      ))}
    </div>
  );
};

export default KeywordsBadges;
