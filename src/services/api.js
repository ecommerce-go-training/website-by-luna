import axios from 'axios';

import { getValueFromStorage } from 'utils/Helpers/index';

// import { Env } from 'config';
import { StorageKey } from 'utils/Constants/index';

/**
 * Instance information structure
 * @structure {
 * name: string,
 * secure: bool
 * baseURL: string
 * headers: object
 * }
 */

const instancesInfo = [
  {
    name: 'api',
    secure: false,
    baseURL: 'https://ecommerce-training-staging.herokuapp.com/api/v1',
    headers: {}
  }
];

const createInstance = ({ baseURL, headers, secure }) => {
  const instance = axios.create({
    baseURL,
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    withCredentials: secure
  });

  instance.interceptors.request.use(
    async config => {
      if (secure) {
        const authToken = getValueFromStorage(StorageKey.accessToken);

        if (authToken) {
          config.headers.common.Authorization = `Bearer ${authToken}`;
        }
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      if (response.data.data.accessToken !== undefined) {
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.data.data.accessToken)
        );
        localStorage.setItem(
          'userInfo',
          JSON.stringify(response.data.data.userInfo)
        );
      }
      return response;
    },
    error => {
      if (error.response.status === 400) {
        localStorage.clear();
      }
      return Promise.reject(error.response.data.message);
    }
  );

  return instance;
};

const instances = instancesInfo.reduce((obj, instanceInfo) => {
  const key = instanceInfo.name;

  obj[key] = createInstance(instanceInfo);

  return obj;
}, {});

export const { api } = instances;
