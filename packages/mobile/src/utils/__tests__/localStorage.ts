import {
  clearStorageData,
  deleteGenericStorageData,
  getGenericStorageData,
  setGenericStorageData,
} from '../localStorage';

describe('Local Storage', () => {
  it('Get and Store value correctly', () => {
    setGenericStorageData('testString', '123');
    setGenericStorageData('testNumber', 123);
    setGenericStorageData('testBoolean', false);

    expect(getGenericStorageData('testString', 'string')).toStrictEqual('123');
    expect(getGenericStorageData('testString', 'number')).toBeUndefined();
    expect(getGenericStorageData('testString', 'boolean')).toBeUndefined();

    expect(getGenericStorageData('testNumber', 'string')).toBeUndefined();
    expect(getGenericStorageData('testNumber', 'number')).toStrictEqual(123);
    expect(getGenericStorageData('testNumber', 'boolean')).toBeUndefined();

    expect(getGenericStorageData('testBoolean', 'string')).toBeUndefined();
    expect(getGenericStorageData('testBoolean', 'number')).toBeUndefined();
    expect(getGenericStorageData('testBoolean', 'boolean')).toStrictEqual(
      false,
    );
  });

  it('Deletes stored value', () => {
    deleteGenericStorageData('testString');
    expect(getGenericStorageData('testString', 'string')).toBeUndefined();

    clearStorageData();
    expect(getGenericStorageData('testString', 'string')).toBeUndefined();
    expect(getGenericStorageData('testNumber', 'number')).toBeUndefined();
    expect(getGenericStorageData('testBoolean', 'boolean')).toBeUndefined();
  });
});
