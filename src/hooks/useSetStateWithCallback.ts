import { useState, useEffect } from "react";
import { usePrevValue } from "./usePrevValue";

export const useSetStateWithCallback = (
    initialState: any,
    callback: Function
) => {
    const [state, setState] = useState(initialState);
    const prevState = usePrevValue(state);

    useEffect(() => {
        if (typeof callback === "function") {
            callback(prevState);
        } else {
            throw new Error("Please provide valid function");
        }
    }, [callback, prevState, state]);

    return [state, setState];
};
