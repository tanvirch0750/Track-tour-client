import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate('/login');
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="flex justify-center items-center h-full">
      <h3 className="text-2xl">Redirecting you in {count} seconds</h3>
    </div>
  );
};

export default LoadingToRedirect;
