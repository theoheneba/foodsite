import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { sendSMS } from '../utils/smsService';
import { Country, detectCountry, SUPPORTED_COUNTRIES } from '../utils/countryService';
import StoreButtons from './StoreButtons';

const PhoneForm = () => {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(SUPPORTED_COUNTRIES[0]);

  useEffect(() => {
    const initCountry = async () => {
      const country = await detectCountry();
      setSelectedCountry(country);
    };
    initCountry();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    if (!selectedCountry.pattern.test(phone)) {
      setStatus('error');
      setErrorMessage(`Please enter a valid ${selectedCountry.name} phone number`);
      return;
    }

    try {
      await sendSMS(phone, selectedCountry.code);
      setStatus('success');
      setPhone('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to send SMS. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex gap-2 mb-4">
          {SUPPORTED_COUNTRIES.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCountry.code === country.code
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            {selectedCountry.dialCode}
          </div>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-brand-primary/20 focus:border-brand-primary focus:outline-none pl-16 pr-16 placeholder-gray-400 transition-all"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary text-white p-3 rounded-full transition-all ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/30'
            }`}
          >
            <Send size={24} className={status === 'loading' ? 'animate-pulse' : ''} />
          </button>
        </div>
        {status === 'success' && (
          <p className="text-green-600 mt-2 text-center font-medium">
            Download link sent! Check your messages.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2 text-center font-medium">
            {errorMessage}
          </p>
        )}
      </form>
      <div className="mt-8 text-center text-gray-600">
        <p className="font-medium mb-4">Or download directly from:</p>
        <StoreButtons />
      </div>
    </div>
  );
};

export default PhoneForm;