import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-24 h-24 border-l-2 border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
