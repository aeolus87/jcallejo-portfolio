import React from 'react';
import myPicture from './img/juls.png'; // Adjust the path to match the actual location of the image

function Home({ theme }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mt-8 md:mt-0 md:mr-8">
          <div className="relative flex items-center justify-center w-64 h-64 border-4 border-cyan-500 rounded-full overflow-hidden shadow-lg animate-bounceIn">
            <img src={myPicture} alt="Julius Callejo" className="w-full h-full object-cover" style={{ transform: 'rotateY(deg)' }} />
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-4xl font-bold animate-fadeIn">Hello! I'm Julius Callejo</h2>
          <h1 className="text-2xl mt-2 animate-fadeIn animation-delay-1">Aspiring Front End Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
