import { useState, useEffect } from "react";

const isClient = typeof window === "object";

export const useInfiniteScroll = (
    callBackFunc?: any
): [boolean, (nextValue?: any) => void] => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect((): any => {
        if (isClient) {
            const handleScroll = () => {
                // check if we are at bottom of scroll or not
                if (
                    window.innerHeight + document.documentElement.scrollTop ===
                    document.scrollingElement?.scrollHeight
                ) {
                    setIsFetching(true);
                } else {
                    setIsFetching(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        // allow user to cancle the callback by setting isFetching to 'false'
        if (!isFetching) return;
        if (callBackFunc) {
            callBackFunc();
        }
    }, [callBackFunc, isFetching]);

    return [isFetching, setIsFetching];
};
