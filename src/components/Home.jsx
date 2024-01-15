import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RITESH DWIVEDI
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As a frontend developer, I specialize in crafting immersive and user-friendly web experiences. With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I bring digital concepts to life. My expertise lies in creating responsive layouts, optimizing website performance, and ensuring seamless interactivity. Passionate about staying updated with the latest trends and technologies, I strive to deliver visually stunning and functionally robust front-end solutions.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
