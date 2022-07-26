import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-[95vh] custom-hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold leading-[55px]">
            TRACK YOUR TOUR AND <br />{' '}
            <span className="text-primary">EXPLORE THE WORLD</span>
          </h1>

          <button
            className="btn btn-secondary btn-lg px-[60px] mt-8"
            onClick={() => navigate('/tours')}
          >
            ALL TOURS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
