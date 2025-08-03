import React from 'react';
import icon from '../assets/images/earth.png'

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-10 bg-gradient-to-b from-[#b2c7d494] to-[#67dcf3cc] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <img alt="" className="h-11"
              src={icon} />
          </div>
          <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
            Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
            into reality.
          </p>
        </div>
        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            <a href="https://prebuiltui.com">prebuiltui</a> ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;