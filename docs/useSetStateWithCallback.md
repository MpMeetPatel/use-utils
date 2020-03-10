-   ## useSetStateWithCallback

```
import React from "react";
import { useSetStateWithCallback } from "use-utils";

function App() {
    const [count, setCount] = useSetStateWithCallback(1, (prevCount) => {
        console.log("App -> prevState", prevCount);
        console.log("App -> currentState", count);
    });

    return (
        <div>
            <div>
                <h1>useSetStateWithCallback</h1>
                <p style={{ alignSelf: "center" }}>currentCount: {count}</p>
                <button
                    type="button"
                    onClick={() =>
                        setCount((prevCount) => prevCount + 1)
                    }
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
useSetStateWithCallback(state, callback) -> retuns [state, setState] (you can rename returned values)

arguments:

state: required (any)
callback: required (function) -> function gives you optional prevState in callback
```

#### note

```
Please only use if you really need prevState & want perform side effect after state is updated.
```
