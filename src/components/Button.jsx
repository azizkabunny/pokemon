import React from 'react';

const Button = ({ title, func, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={func}
      className={` bg-gray-800 text-white mr-2 py-3 px-8 rounded-lg hover:opacity-85 ${
        disabled && 'opacity-30'
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
