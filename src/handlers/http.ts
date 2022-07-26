import axios from 'axios';
import constants from '../constants';

const handlers = axios.create({
  baseURL: constants.baseUrl,
  responseType: 'json',
});

export default handlers;
