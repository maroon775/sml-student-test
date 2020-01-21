/**
 * @param callback Function
 * @param time Number miliseconds debouncing
 * */
export default (callback, time = 250, interval) =>
    (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            interval = null;
            callback(...args);
        }, time);
    };
