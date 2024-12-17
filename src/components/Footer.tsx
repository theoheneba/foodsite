import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Chowex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;