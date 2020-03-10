-   ## useDebounce

**1. value debounce**

```
import React, { useState } from "react";
import { useDebounce } from "use-utils";

function App() {
    const [inputVal, setInputVal] = useState("");

    // you can use this value for api call
    const debouncedValue = useDebounce(inputVal, 500);

    return (
        <div>
            <input
                type="text"
                onChange={e => setInputVal(e.target.value)}
            />
            <p>debounced value: {debouncedValue}</p>
        </div>
    );
}

```

**2. function debounce**

```
import React, { useState, useRef } from "react";
import { useDebounceFunction } from "use-utils";

function App() {
    const [logState, setLogState] = useState("");
    const refInput = useRef(null);
    const debouncedSetLogState = useDebounceFunction(() => {
        setLogState(refInput.current ? refInput.current.value : '');
    }, 500);

    return (
        <div>
            <button onClick={debouncedSetLogState}>Click me multiple times</button>
            <input type="text" ref={refInput} />
            Logged Val: {logState}
        </div>
    );
}
```

#### signature

```
useDebounce(value, delay) -> return: value(debounced version of value)
useDebounceFunction(function, delay) -> return: function(debounced version of function)

arguments:

value: required
delay: required (default: 200)
function: required
delay: required (default: 200)
```

#### note

```
Don't use useDebounceFunction inside useEffect hook - why ? -> because useEffect run in every re-render so ultimately you will end up creating new copy of function inside your component !
```
