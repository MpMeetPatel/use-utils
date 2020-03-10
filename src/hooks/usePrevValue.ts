import { useEffect, useRef } from "react";

export const usePrevValue = <TState>(state: TState): TState | any => {
    // ref as a instance property
    const ref = useRef<TState>();

    // run effect on every re-render
    useEffect(() => {
        ref.current = state;
    });

    return ref.current;
};
