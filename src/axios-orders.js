import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-2a7f6.firebaseio.com/'
});

export default instance;
