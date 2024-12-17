export interface Country {
  code: string;
  name: string;
  dialCode: string;
  pattern: RegExp;
  format: (number: string) => string;
}

export const SUPPORTED_COUNTRIES: Country[] = [
  {
    code: 'GH',
    name: 'Ghana',
    dialCode: '+233',
    pattern: /^(\+?233|0)?([23579][0-9]{8})$/,
    format: (number: string) => {
      const cleaned = number.replace(/\D/g, '');
      if (cleaned.startsWith('233')) {
        return '+233' + cleaned.slice(3);
      }
      if (cleaned.startsWith('0')) {
        return '+233' + cleaned.slice(1);
      }
      return '+233' + cleaned;
    }
  },
  {
    code: 'NG',
    name: 'Nigeria',
    dialCode: '+234',
    pattern: /^(\+?234|0)?([789][01]\d{8})$/,
    format: (number: string) => {
      const cleaned = number.replace(/\D/g, '');
      if (cleaned.startsWith('234')) {
        return '+234' + cleaned.slice(3);
      }
      if (cleaned.startsWith('0')) {
        return '+234' + cleaned.slice(1);
      }
      return '+234' + cleaned;
    }
  },
  {
    code: 'ZA',
    name: 'South Africa',
    dialCode: '+27',
    pattern: /^(\+?27|0)?([678][0-9]{8})$/,
    format: (number: string) => {
      const cleaned = number.replace(/\D/g, '');
      if (cleaned.startsWith('27')) {
        return '+27' + cleaned.slice(2);
      }
      if (cleaned.startsWith('0')) {
        return '+27' + cleaned.slice(1);
      }
      return '+27' + cleaned;
    }
  }
];

export const detectCountry = async (): Promise<Country> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const country = SUPPORTED_COUNTRIES.find(c => c.code === data.country);
    return country || SUPPORTED_COUNTRIES[0]; // Default to Ghana if country not supported
  } catch (error) {
    console.error('Error detecting country:', error);
    return SUPPORTED_COUNTRIES[0]; // Default to Ghana on error
  }
};