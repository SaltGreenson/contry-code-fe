export const storage = {
  set: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue: T): T => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
