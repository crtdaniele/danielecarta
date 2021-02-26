import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

const initDataStore = () => {
  Amplify.configure(awsconfig);
};

export default initDataStore;
