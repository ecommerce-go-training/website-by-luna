import { StorageKey } from 'utils/Constants';

const getValueFromStorage = () => localStorage.getItem(StorageKey.accessToken);

const removeValueFromStorage = () =>
  localStorage.removeItem(StorageKey.accessToken);

const setValueToStorage = token =>
  localStorage.setItem(StorageKey.accessToken, token);

export { getValueFromStorage, removeValueFromStorage, setValueToStorage };
