import React from 'react';
import '../App.css'; 

const TextDisplay = ({ text = "def calculate_area(radius):", currentIndex = 0, input="", errorIndex=0 }) => {
  return (
    <div className="text-display">
    {text && text.split('').map((char, index) => (
      <span
        key={index}
        className={
          currentIndex === index && input.length === index
            ? 'pointer'
            : char === ' ' && index > 0 && input[index - 1] !== text[index - 1] // Check if space is required and not added
            ? 'error'
            : index === errorIndex
            ? 'error'
            : currentIndex > index
            ? 'matched'
            : ''
        }
      >
        {char}
      </span>
    ))}
  </div>
);
};

export default TextDisplay;
