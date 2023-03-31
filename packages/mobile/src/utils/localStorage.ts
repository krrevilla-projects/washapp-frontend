import {MMKV} from 'react-native-mmkv';

export enum StorageKeys {
  accessToken = 'access_token',
  userId = 'user_id',
}

export const genericStorage = new MMKV();

type StorageDataType = string | number | boolean;
type GetStorageDataType = 'string' | 'number' | 'boolean';

export const getGenericStorageData = (
  key: StorageKeys | string,
  type: GetStorageDataType,
) => {
  switch (type) {
    case 'string':
      return genericStorage.getString(key);
    case 'boolean':
      return genericStorage.getBoolean(key);
    case 'number':
      return genericStorage.getNumber(key);
  }
};

export const setGenericStorageData = (
  key: StorageKeys | string,
  data: StorageDataType,
) => {
  return genericStorage.set(key, data);
};

export const deleteGenericStorageData = (key: StorageKeys | string) => {
  return genericStorage.delete(key);
};

export const clearStorageData = () => {
  return genericStorage.clearAll();
};
