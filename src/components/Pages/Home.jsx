import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import myPicture from './img/juls.png';
import './Home.css'; // Import the CSS file for styling

function Home({ theme }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Background Animation */}
      <div className="background-animation"></div>

      <div className="flex flex-col md:flex-row w-full relative z-10 items-center justify-between px-4 md:px-8">
        {/* Left Box */}
        <div className="left-box p-4 md:p-8 border-4 border-transparent rounded-lg shadow-lg bg-transparent backdrop-filter backdrop-blur-lg mb-8 md:mb-0 md:mr-4 md:w-1/2">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative w-1/4 md:w-32 h-1/4 md:h-32 border-4 border-cyan-500 rounded-full overflow-hidden shadow-lg mb-2">
              <img src={myPicture} alt="Julius Callejo" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start md:mt-4 md:ml-12 md:w-3/4 ">
              <h2 className="text-xl md:text-4xl font-bold mb-3">Greetings! I am</h2>
              <div className="overflow-hidden text-center md:text-left" style={{ width: '80%', height: 'px' }}>
                <ReactTyped
                  className="text-base md:text-lg font-bold"
                  strings={[
                    '<span style="font-size: 2rem;">Julius Callejo</span>',
                    '<span style="font-size: 1.75rem;">Web Developer</span>'
                  ]}
                  typeSpeed={100}
                  backSpeed={120}
                  loop
                  style={{ '--typed-cursor': 'none' }} 
                />
                <style>{`.typed-cursor { display: none !important; }`}</style>
              </div>
            </div>
          </div>
        </div>
        {/* Right Box */}
        <div className="right-box p-4 md:p-8 border-4 border-transparent rounded-lg shadow-lg bg-transparent backdrop-filter backdrop-blur-lg md:w-1/2">
          <p className="text-white mb-4">
            I am Julius Callejo, a passionate and dedicated student web developer. Currently pursuing my degree in Computer Science, I have a strong foundation in web development technologies including HTML, CSS, JavaScript, and React. My goal is to create intuitive and dynamic user experiences. I enjoy problem-solving and continuously learning new skills to stay up-to-date with the latest industry trends.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="white" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
