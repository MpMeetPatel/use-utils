import { useState, useEffect } from "react";

// make fn outside of react component ,to avoid creation of copy on every re-render

const getWindowSizes = () => {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    };
};

const isClient = typeof window === "object";

export const useWindowSizes = () => {
    const [windowSizes, setWindowSizes] = useState(getWindowSizes());

    useEffect((): (() => void) | void => {
        if (isClient) {
            const handleResize = () => {
                setWindowSizes((prevSizes: object) => ({
                    ...prevSizes,
                    ...getWindowSizes()
                }));
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowSizes;
};
