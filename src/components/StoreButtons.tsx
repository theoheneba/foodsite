import React from 'react';
import { APP_LINKS } from '../utils/appLinks';

const StoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a
        href={APP_LINKS.IOS}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-8"
        />
      </a>
      <a
        href={APP_LINKS.ANDROID}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-8"
        />
      </a>
    </div>
  );
};

export default StoreButtons;