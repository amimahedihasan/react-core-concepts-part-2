import { Suspense } from 'react'
import './App.css'
// import BallMan from './Batsman'
import Batsman from './Batsman'
import Comments from './Comments'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'

// OLD WAY (Traditional fetch)
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// OLD WAY(Traditional fetch)
// const loadData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await res.json()
//   return data
// }

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json()
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json()
// }
// const fetchComments = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments")
//   return res.json()
// }

function App() {
  
  // const postsPromise = fetchPosts()
  // const commentsPromise = fetchComments()
//   const friendsPromise = fetchFriends()

  // Method 1: Regular function defined inside the component
  // function handleClick() {
  //   alert("I am Clicked")
  // }

  // Method 3: Arrow function assigned to a variable
  // const handleClick3 = () => {
  //   alert('Clicked 3')
  // }

  // Method 5: Function that accepts parameters
  // const handleAdd5 = (num) => {
  //   const newNum = num + 5
  //   alert(newNum)
  // }

  return (
    <>
      <h3>Vite + React Event Handlers</h3>
      <Counter></Counter>
      <Players></Players>
      
      {/* <Suspense fallback={<h3>All Comments are loading..</h3>}>
      <Comments commentsPromise={commentsPromise}></Comments>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Posts are coming..</h4>}>
      <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>LLoading Friends...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
{/* 
      <Suspense fallback={<h3>Friends are coming for me treat....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>
      {/* <BallMan></BallMan> */}

      {/* 1. Using a pre-defined function reference.
        Pass the function name without parentheses so it only runs when clicked.
      */}
      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* 2. Inline regular function.
        Writing the function directly inside the onClick attribute.
      */}
      <button onClick={function handleClick2() { alert('clicked-2') }}>Click Me2</button>

      {/* 3. Using an arrow function reference.
        A modern and clean way to handle events using a constant.
      */}
      {/* <button onClick={handleClick3}>Clicked me 3</button> */}

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