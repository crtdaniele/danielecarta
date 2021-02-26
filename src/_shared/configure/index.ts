import initDataStore from './datastore';
import initI18n from './i18n';

const configureApp = () => {
  initDataStore();
  initI18n();
};

export default configureApp;
