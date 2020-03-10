import { useState, useEffect } from "react";

// make fn outside of react component ,to avoid creation of copy on every re-render

// we have to declare any, because it's draft API
declare let navigator: any;

const getOnlineStatus = () => navigator.onLine;
const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

export const useNetworkStatus = (): boolean => {
    const [isOnline, setIsOnline] = useState(getOnlineStatus());

    useEffect((): (() => void) | void => {
        const handleNetworkOnOff = () => {
            setIsOnline(getOnlineStatus());
        };
        connection.addEventListener("change", handleNetworkOnOff);
        return () => {
            connection.removeEventListener("change", handleNetworkOnOff);
        };
    }, []);

    return isOnline;
};
