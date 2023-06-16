export const setLocalStorageItem = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Ошибка при записи в localStorage:', error);
  }
};

// Получение значения из localStorage
export const getLocalStorageItem = (key: string): any | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('Ошибка при чтении из localStorage:', error);
    return null;
  }
};
