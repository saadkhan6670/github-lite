export const debounce = (func: Function, delay: number) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      return func(...args);
    }, delay);
  };
};
