import React from 'react';
import Button from './Button';

const Pagination = ({ prev, next, nextDisabled, prevDisabled }) => {
  return (
    <div className=' fixed bottom-5 right-10'>
      <Button title='-' func={prev} disabled={prevDisabled} />
      <Button title='+' func={next} disabled={nextDisabled} />
    </div>
  );
};

export default Pagination;
