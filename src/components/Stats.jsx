import React from 'react';

const Stats = ({ title, value }) => {
  return (
    <div>
      <div className='mb-1 font-light capitalize '>
        {title} : {value}
      </div>
      <div className='w-full h-4  bg-gray-200 rounded-full '>
        <div
          className='h-4 bg-black rounded-full '
          style={{ width: `${value / 2}%` }}
        />
      </div>
    </div>
  );
};

export default Stats;
