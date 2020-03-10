-   ## usePrevValue

```
import React, { useState } from "react";
import { usePrevValue } from "use-utils";

function App() {
    const [count, setCount] = useState(1);
    const prevCount = usePrevValue(count);

    return (
        <div>
            <div>
                <h1>usePrevValue</h1>
                <p style={{ alignSelf: "center" }}>
                    currentCount: {count}
                    <hr />
                    prevCount: {prevCount ? prevCount : "-"}
                </p>
                <button
                    type="button"
                    onClick={() => setCount(prevCount => prevCount + 1)}
                >
                    Increament count
                </button>
            </div>
        </div>
    );
}
```

#### signature

```
usePrevValue(value) -> returns: previous value

arguments:

value: required (default: undefined)
```

#### note

```
You don't get access to previous value in first render (as there is no value in first render). just like you don't have access to prevProps/prevState in first render.
```
