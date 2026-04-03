import './App.css'

function App() {

  // Method 1: Regular function defined inside the component
  function handleClick() {
    alert("I am Clicked")
  }

  // Method 3: Arrow function assigned to a variable
  const handleClick3 = () => {
    alert('Clicked 3')
  }

  // Method 5: Function that accepts parameters
  const handleAdd5 = (num) => {
    const newNum = num + 5
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React Event Handlers</h3>

      {/* 1. Using a pre-defined function reference.
        Pass the function name without parentheses so it only runs when clicked.
      */}
      <button onClick={handleClick}>Click Me</button>

      {/* 2. Inline regular function.
        Writing the function directly inside the onClick attribute.
      */}
      <button onClick={function handleClick2() { alert('clicked-2') }}>Click Me2</button>

      {/* 3. Using an arrow function reference.
        A modern and clean way to handle events using a constant.
      */}
      <button onClick={handleClick3}>Clicked me 3</button>

      {/* 4. Inline arrow function.
        Useful for very short logic that doesn't need a separate function.
      */}
      <button onClick={() => alert("clicked 4")}>Clicked me 4</button>

      {/* 5. Arrow function with arguments (Parameters).
        Crucial: We use a wrapper function () => handleAdd5(10) to prevent 
        the function from running automatically on page load.
      */}
      <button onClick={() => handleAdd5(10)}>Clicked me and see the number</button>
    </>
  )
}

export default App

/*
  QUICK NOTES ON HOW IT WORKS:
  - In React, event names are camelCase (onClick instead of onclick).
  - We pass a function itself, not the result of a function. 
  - Correct: onClick={handleClick}
  - Incorrect: onClick={handleClick()} (This would fire immediately when the page renders).
  - If you need to pass a parameter, always use an anonymous arrow function wrapper.
*/