import { useState, useEffect, useRef, useCallback } from "react";

// UTIL FOR NATIVE DEBOUCE (using closure concept)
const debounce = (func: () => any, delay: number) => {
    let inDebounce: any = null;
    return function() {
        const context = this;
        const args: any = arguments;
        // clear the timeout for the first call (at the creation of closure function time)
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};

// Debounce the value
export const useDebounce = (value: any, delay: number) => {
    const timerRef = useRef<any | null>();
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // let TS know we are using for browser environment
        const timerId = window.setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        // In first render we don't have ref value as useRef run after first render
        timerRef.current = timerId;

        return () => {
            // remove prev timer if new time arrived for next render
            clearTimeout(timerRef.current);
        };
    }, [delay, value]); // Update the value only after delay|value change
    return debounceValue;
};

// Debounce the function
export const useDebounceFunction = (func: any, delay: number) => {
    if (isNaN(delay)) {
        throw new Error("Please provide delay on number");
    }

    if (func == null || typeof func !== "function") {
        throw new Error("Please provide valid function");
    }

    // memoized the debouced function(we don't want to create new on every re-render so)
    // returns a debounces version of your function
    return useCallback(debounce(func, delay), [func, delay]);
};
