// Import "use" hook from React
// This hook is used to read data from a Promise (modern React feature)
import { use } from "react"

// Import Friend component (child component)
// Each friend will be shown using this component
import Friend from "./Friend"

export default function Friends({ friendsPromise }) {

    // use() will wait until the Promise is resolved
    // After loading, it returns the actual data (array of friends)
    const friends = use(friendsPromise)

    // Check data in console (for debugging)
    console.log(friends)

    return (
        <div className="card">

            {/* Show total number of friends */}
            <h3>Friends: {friends.length}</h3>

            {/* Loop through the friends array */}
            {
                friends.map(friend => (
                    // Pass each friend as props to Friend component
                    // key is required for React list rendering
                    <Friend key={friend.id} friend={friend} />
                ))
            }

        </div>
    )
}

/*
IMPORTANT NOTES (Simple English)

1. Props Destructuring:
   function Friends({ friendsPromise })
   → We extract friendsPromise from props

2. use(friendsPromise):
   → Waits for data (Promise)
   → Returns resolved data (array)

3. friends is an array:
   → We can use:
      - friends.length → total count
      - friends.map() → loop data

4. Friend Component:
   → Each friend is shown using <Friend />
   → Makes code clean and reusable

5. key={friend.id}:
   → Helps React identify each item
   → Improves performance

6. Suspense (used in App.js):
   → Shows loading UI while data is loading
   → Works with use()

FLOW (How it works)

1. App calls API → returns Promise
2. Suspense shows fallback (loading UI)
3. use() waits for data
4. Data arrives → Friends component renders
5. map() shows each friend
*/