export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]+$/;
  return phoneRegex.test(phoneNumber);
};

export const sanitizePhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/\D/g, '');
};