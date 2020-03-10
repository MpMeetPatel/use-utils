-   ## useNetworkStatus

```
import React, { useEffect } from "react";
import { useNetworkStatus } from "use-utils";

function App() {
    const isOnline = useNetworkStatus();

    useEffect(() => {
        // SUBSCRIBE TO NETWORK CHANGE:
        console.log(`isOnline ${isOnline}`);
    }, [isOnline]);

    return (
        <div>
            <div>
                <h1>useNetworkStatus</h1>
                <p style={{ alignSelf: "center" }}>
                    isOnline:{" "}
                    {isOnline
                        ? "Yes I have internet"
                        : "Ohh my internet is not working"}
                </p>
            </div>
        </div>
    );
}
```

#### signature

```
useNetworkStatus() -> returns: isOnline (Boolean)

arguments: -
```
