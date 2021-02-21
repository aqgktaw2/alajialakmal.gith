function throttle(func, wait = 100) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        func.call(this, ...args);
        timeoutId = null;
      }, wait);
    }
  };
}

export default throttle;
