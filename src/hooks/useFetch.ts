import { useState, useEffect } from "react";

interface IntialState<TData> {
    data: TData | null | undefined;
    isLoading: boolean;
    error: object | any;
}

export const useFetch = <TData = any>(
    url: string,
    method = "GET",
    payload?: any,
    headers?: object
) => {
    const [state, setState] = useState<IntialState<TData>>({
        data: null,
        isLoading: false,
        error: null
    });

    useEffect(() => {
        const fetchCall = async () => {
            try {
                if (payload && typeof payload == "object") {
                    setState((prevState: any) => ({
                        ...prevState,
                        isLoading: true
                    }));
                    const response = await fetch(url, {
                        headers,
                        method,
                        body: JSON.stringify(payload)
                    } as RequestInit);
                    const data = await response.json();
                    setState((prevState: any) => ({
                        ...prevState,
                        data,
                        isLoading: false,
                        error: null
                    }));
                } else if (method === "GET") {
                    setState((prevState: any) => ({
                        ...prevState,
                        isLoading: true
                    }));
                    const response = await fetch(url, {
                        method
                    } as RequestInit);
                    const data = await response.json();
                    setState((prevState: any) => ({
                        ...prevState,
                        data,
                        isLoading: false,
                        error: null
                    }));
                } else {
                    setState((prevState: any) => ({
                        ...prevState,
                        isLoading: true
                    }));
                    const response = await fetch(url, {
                        headers,
                        method,
                        body: payload
                    } as RequestInit);
                    const data = await response.json();
                    setState((prevState: any) => ({
                        ...prevState,
                        data,
                        isLoading: false,
                        error: null
                    }));
                }
            } catch (error) {
                setState((prevState: any) => ({
                    ...prevState,
                    data: null,
                    isLoading: false,
                    error
                }));
            }
        };
        fetchCall();
    }, []); // only run 1 time

    return { ...state };
};
