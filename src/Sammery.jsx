/**
 * 1. Components
 * A component is a reusable building block of React UI.
 * Example: Button, Navbar, Card, etc.
 * We can create components as functions.
 */

/**
 * 2. JSX
 * JSX means JavaScript XML.
 * It allows us to write HTML inside JavaScript.
 * Example:
 * return <h1>Hello</h1>
 * JSX makes UI writing easier and readable.
 */

/**
 * 3. Props
 * Props (properties) are used to pass data from parent to child component.
 * Props are read-only (cannot be changed inside child).
 * Example:
 * <Child name="Mahedi" />
 */

/**
 * 4. State
 * State is used to store data inside a component.
 * When state changes → UI re-renders.
 * Example:
 * const [count, setCount] = useState(0)
 */

/**
 * 5. Events
 * Events are actions like click, change, submit, etc.
 * In React, we use camelCase event names.
 * Example:
 * <button onClick={handleClick}>Click</button>
 */

/**
 * 6. Conditional Rendering
 * It means showing different UI based on condition.
 * Example:
 * {isLoggedIn ? <Dashboard /> : <Login />}
 */
/**
 * API URL:
 * https://jsonplaceholder.typicode.com/users
 */

// Api Related
/**
 * 1. Simple fetch (Old way)
 * Using .then() to handle promise
 */

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))


/**
 * 2. Modern fetch using async/await
 * Easier to read and write
 */

const loadData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
}

/**
 * Explanation:
 * - fetch() → calls API and returns Promise
 * - res.json() → converts response into usable data
 * - async/await → makes code look synchronous
 */