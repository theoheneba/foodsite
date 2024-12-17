export const API = {
  SMS: {
    URL: 'https://sms.infolly.net/api/http/sms/send',
    TOKEN: '2|DKTTVyIHXzoZqEiWWa3XpmTysFrZaWTVTvkaY11hdfa33851',
  }
} as const;

export const MESSAGE_TEMPLATES = {
  APP_DOWNLOAD: (iosLink: string, androidLink: string) => 
    `Download Chowex now!\n\niOS: ${iosLink}\nAndroid: ${androidLink}`
} as const;