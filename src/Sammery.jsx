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

//**
 
//  * REACT ADVANCED KNOWLEDGE & LOGIC NOTES

/**
 * 1. Event Trigger
 * Explanation: An event trigger is an action performed by a user 
 * (like clicking, typing, or hovering). React listens to these 
 * actions and executes a specific function.
 * Example: onClick={() => console.log('Button Clicked!')}
 */

/**
 * 2. State
 * Explanation: State is an object that holds information about 
 * the component. When state changes, React "re-renders" the 
 * component to update what the user sees on the screen.
 */

/**
 * 3. Data Load from API
 * Explanation: We fetch data from external servers (URLs). Since it 
 * takes time, we use 'fetch' which returns a Promise. Once the data 
 * arrives, we convert it to JSON and save it in a 'State'.
 */

/**
 * 4. Loop through to display data (.map)
 * Explanation: In React, we use the .map() function to iterate 
 * through an array of data and return JSX for each item.
 */

/**
 * 5. Why we use the 'key' prop?
 * Explanation: The 'key' helps React identify which items have 
 * changed, been added, or removed. It gives each list item a 
 * stable identity, making the update process much faster.
 * Rule: Always use a unique ID (like user.id) as the key.
 */

/**
 * 6. What is useState and how does it work?
 * Explanation: useState is a Hook that lets you add React state 
 * to function components. 
 * - It returns two things: the current state value and a 
 * function that lets you update it.
 * Syntax: const [value, setValue] = useState(initialValue)
 */

/**
 * 7. What is useEffect and when should you use it?
 * Explanation: useEffect lets you perform "side effects" in 
 * functional components. 
 * Use it for: 
 * - Fetching data from an API on page load.
 * - Setting up a subscription or timer.
 * - Updating the document title.
 */

/**
 * 8. Why is "Thinking in React" important?
 * Explanation: It is the process of breaking a complex UI into 
 * small, reusable components. It helps you decide where the 
 * "State" should live and how data should flow (Top to Bottom).
 * Benefit: Makes your code organized, scalable, and easy to debug.
 */

// -----------------------------------------------------------
// A QUICK REMINDER FOR YOUR PRACTICE:
// -----------------------------------------------------------
/*
  - If you use useEffect, don't forget the dependency array [].
  - If you pass parameters to onClick, use an arrow function: () => func(param).
  - Always destructure props like { commentsPromise } instead of just (props).
*/