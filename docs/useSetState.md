-   ## useSetState

```
import React from "react";
import { useSetState } from "use-utils";

function App() {
    const [state, setState] = useSetState({ count: 1 });

    return (
        <div>
            <div>
                <h1>useSetState</h1>
                <p style={{ alignSelf: "center" }}>
                    currentCount: {state.count}
                </p>
                <button
                    type="button"
                    onClick={() => setState({ count: state.count + 1 })}
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
useSetState(state) -> retuns [state, setState]

arguments:

state: required (object)
```
