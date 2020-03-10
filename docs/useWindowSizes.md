-   ## useWindowSizes

```
import React from "react";
import { useWindowSizes } from "use-utils";

function App() {
    const {
        innerHeight,
        innerWidth,
        outerHeight,
        outerWidth
    } = useWindowSizes();

    return (
        <div>
            <div>
                <h1>useWindowSizes</h1>
                <p style={{ alignSelf: "center" }}>
                    innerHeight: {innerHeight}
                    <br />
                    innerWidth: {innerWidth}
                    <br />
                    outerHeight: {outerHeight}
                    <br />
                    outerWidth: {outerWidth}
                </p>
            </div>
        </div>
    );
}
```

#### signature

```
useNetworkStatus() -> returns: {
        innerHeight,
        innerWidth,
        outerHeight,
        outerWidth
    } (only destructure required values )

arguments: -
```
