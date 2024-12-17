import axios from 'axios';
import { API, MESSAGE_TEMPLATES } from './constants';
import { APP_LINKS } from './appLinks';
import { SUPPORTED_COUNTRIES } from './countryService';

export const sendSMS = async (phoneNumber: string, countryCode: string) => {
  try {
    // Find the country configuration
    const country = SUPPORTED_COUNTRIES.find(c => c.code === countryCode);
    if (!country) {
      throw new Error('Unsupported country');
    }

    // Validate and format the phone number using country-specific pattern
    if (!country.pattern.test(phoneNumber)) {
      throw new Error(`Invalid phone number format for ${country.name}`);
    }

    // Format the phone number using country-specific formatter
    const formattedNumber = country.format(phoneNumber);
    
    const message = MESSAGE_TEMPLATES.APP_DOWNLOAD(APP_LINKS.IOS, APP_LINKS.ANDROID);
    
    const parameters = {
      message,
      sender_id: 'Chowex',
      recipient: formattedNumber.replace('+', ''),
      type: 'plain',
      api_token: API.SMS.TOKEN
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    console.log('Sending SMS with parameters:', parameters);

    const response = await axios.post(API.SMS.URL, parameters, { headers });
    console.log('SMS API Response:', response.data);
    
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    
    return response.data;
  } catch (error: any) {
    console.error('SMS API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
};