import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/api';
import logger from './middleware/logger';
import toast from './middleware/toastify';
import reducer from './reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: 'console' }),
      toast,
      api,
    ],
  });
}
