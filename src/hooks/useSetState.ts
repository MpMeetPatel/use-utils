import { useCallback, useState } from "react";

export const useSetState = (initialState: any) => {
    const [state, setChange] = useState(initialState);
    const setState = useCallback(
        currentUpdate => {
            setChange((prevState: any) => ({
                ...prevState,
                ...currentUpdate
            }));
        },
        [setChange]
    );

    return [state, setState];
};
