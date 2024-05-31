import React from 'react';
import { ReactTyped } from 'react-typed';
import myPicture from './img/juls.png'; 

function Home({ theme }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="mt-8 md:mt-0 flex justify-center md:justify-start w-64 h-64">
          <div className="relative w-64 h-64 border-4 border-cyan-500 rounded-full overflow-hidden shadow-lg animate-bounceIn">
            <img src={myPicture} alt="Julius Callejo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-center md:text-right flex flex-col items-center md:items-start md:ml-8">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold">Hello! I'm</h2>
            <div className="ml-2" style={{ minWidth: '269px' }}>
              <ReactTyped
                className="md:text-4xl sm:text-4xl font-bold text-[#3ca685]"
                strings={['<span style="font-size: 2.25rem;">Julius Callejo</span>', 'Web Developer']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
