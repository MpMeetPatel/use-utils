-   ## useFetch

**1. GET**

```
import React from "react";
import { useFetch } from "use-utils";

function App() {
    // GET METHOD EXAMPLE

    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    return (
        <div>
            <div>
                <h1>GET</h1>
                <p>getIsLoading: {isLoading ? "Loading ...." : null}</p>
                <p>getError: {error ? error : null}</p>
                <pre>{JSON.stringify(data)}</pre>
            </div>
        </div>
    );
}
```

**2. POST**

```
import React from "react";
import { useFetch } from "use-utils";

function App() {
    // POST METHOD EXAMPLE

    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        "POST",
        {
            title: "foo",
            body: "bar",
            userId: 1
        },
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    );

    return (
        <div>
            <div>
                <h1>POST</h1>
                <p>getIsLoading: {isLoading ? "Loading ...." : null}</p>
                <p>getError: {error ? error : null}</p>
                <pre>{JSON.stringify(data)}</pre>
            </div>
        </div>
    );
}
```

**3. PUT**

```
import React from "react";
import { useFetch } from "use-utils";

function App() {
    // PUT METHOD EXAMPLE

    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        "PUT",
        {
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1
        },
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    );

    return (
        <div>
            <div>
                <h1>PUT</h1>
                <p>getIsLoading: {isLoading ? "Loading ...." : null}</p>
                <p>getError: {error ? error : null}</p>
                <pre>{JSON.stringify(data)}</pre>
            </div>
        </div>
    );
}
```

#### signature

```
useFetch(url, method, payload, headers) -> retuns { data, isLoading, error }

arguments:

url: required
method: optional (default: 'GET')
payload: optional (default: null)
method: optional (default: null)
```

#### note

```
Don't use useFetch inside any function or inside any hook -> because react hooks relies on order of hook function. so, every hook needs to immediate function of react compoenent function (due  to closure is required !)
```
