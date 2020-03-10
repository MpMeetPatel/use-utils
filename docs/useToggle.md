-   ## useToggle

```
import React from "react";
import { useToggle } from "use-utils";

function App() {
    const [flag, toggle] = useToggle(false);
    return (
        <div>
            <div>
                <h1>useToggle</h1>
                <p style={{ alignSelf: "center" }}>
                    Toogle Value: {JSON.stringify(flag)}
                </p>
                <button type="button" onClick={toggle}>
                    Toggle value
                </button>
            </div>
        </div>
    );
}
```

#### signature

```
useToggle(initialValue) -> retuns [flag, toggle] (you can rename returned values)

arguments:
initialValue: required (boolean)
```
