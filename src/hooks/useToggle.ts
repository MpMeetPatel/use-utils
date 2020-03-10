import { useCallback, useState } from "react";

export const useToggle = (
    initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = useCallback(
        (nextValue?: any) => {
            if (typeof nextValue === "boolean") {
                setValue(nextValue);
            } else {
                setValue((prevState: boolean) => !prevState);
            }
        },
        [setValue]
    );

    return [value, toggleValue];
};
