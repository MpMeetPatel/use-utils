-   ## useInfiniteScroll

```
import React, { useEffect } from "react";
import { useInfiniteScroll } from "use-utils";

function App() {
    const [isFetching, setIsFetching] = useInfiniteScroll();

    useEffect(() => {
        if (isFetching) {
            console.log("API CALL OR YOUR STUFF");
            console.log("AFTER YOUR FIISHED STUFF");
            console.log("I AM JUST FAKING API CALL HERE");
            setTimeout(() => {
                setIsFetching(false);
            }, 1000);
        }
    }, [isFetching, setIsFetching]);

    return (
        <div>
            <div style={{ minHeight: "1200px" }}>
                <h1>useInfiniteScroll</h1>
                <p style={{ alignSelf: "center", marginTop: "1000px" }}>
                    isFetching:{" "}
                    {isFetching
                        ? "Do your stuff/ API call for new data ...."
                        : null}
                </p>
            </div>
        </div>
    );
}
```

#### signature

```
useInfiniteScroll() -> returns: [isFetching, setIsFetching]

arguments: -

```
