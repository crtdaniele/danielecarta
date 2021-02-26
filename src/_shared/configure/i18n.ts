import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      it: {
        translation: require('../../assets/locales/it.json'),
      },
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default initI18n;
