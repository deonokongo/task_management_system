import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import Logo from '../assets/logo.png';
import HeroImage from '../assets/background.png';
import HeroImageSecondary from '../assets/heros.png';
import XSpaceIcon from '../assets/xspace.png'; 
import LinkedInIcon from '../assets/linkedin.png'; 
import InstagramIcon from '../assets/instagram.jpeg'; 
import TikTokIcon from '../assets/tiktok.png'; 
import { FaSearch } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col bg-red-700 text-white">
        <div className="flex justify-between items-center p-10">
          <div className="flex items-center space-x-6">
            <img src={Logo} alt="Logo" className="h-20" />
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-black px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600">
                <FaSearch />
              </button>
            </div>
          </div>
          <nav className="flex space-x-12">
            <Link to="/home">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-bold">HOME</button>
            </Link>
            <Link to="/features">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-bold">FEATURES</button>
            </Link>
            <Link to="/pricing">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-bold">PRICING</button>
            </Link>
            <Link to="/about">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-bold">ABOUT</button>
            </Link>
            <Link to="/login">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded font-bold">LOGIN</button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <div className="mb-4 text-center">
            <h1 className="text-4xl font-bold">Efficiently Manage Your Daily Tasks and Become More Productive.</h1>
            <h2 className="text-xl text-gray-700">Effortlessly manage your tasks and prioritize what matters most. Achieve your goals with a clear focus and organized approach!</h2>
            <Link to="/signup">  {/* Navigate to signup page */}
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up for Free
              </button>
            </Link>
          </div>
          <div>
            <img src={HeroImageSecondary} alt="Hero Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white p-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
        <div className="flex justify-between mt-2">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" target="_blank" aria-label="X Space">
              <img src={XSpaceIcon} alt="X Space" className="h-6" />
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-6" />
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="h-6" />
            </a>
            <a href="#" target="_blank" aria-label="TikTok">
              <img src={TikTokIcon} alt="TikTok" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
