import { useState } from "react"

export default function Batsman() {
    /* 1. State Declaration: 
       Here we are tracking two things: 'runs' and 'fours'. 
       Both start at 0.
    */
    const [runs, setRuns] = useState(0)
    const [fours, setFours] = useState(0)

    // 2. Logic for taking a single run:
    const handleSingle = () => {
        const updatedRuns = runs + 1 // Existing runs + 1
        setRuns(updatedRuns)         // Updating the runs state
    }

    // 3. Logic for hitting a four:
    const handleFour = () => {
        const updatedRuns = runs + 4  // Existing runs + 4
        const updatedFours = fours + 1 // Incrementing total fours count
        
        // Updating both states at once
        setFours(updatedFours)
        setRuns(updatedRuns)
    }

    return (
        <div>
            <h3>Players: Bangladeshi Batsman</h3>

            {/* 4. Displaying total boundaries (in your code you labeled it Six but used fours) */}
            <p><small>Fours: {fours}</small></p>

            {/* 5. Conditional Rendering: 
                If runs become greater than 50, this message will automatically appear. 
            */}
            {
                runs > 50 && <p>Your Score: 50+</p>
            }

            {/* 6. Live Score Display: This updates every time 'runs' state changes. */}
            <h1>Score: {runs}</h1>

            {/* 7. Event Handlers: Connecting functions to buttons. */}
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button>Six</button>
        </div>
    )
}

// more practice
// export default function BallMan(){
//      const[ball,setBall]= useState(0)

//     const handleSingleBall=()=>{
//         const updatedBall = ball +1
//         setBall(updatedBall)
       
//     }
//     return(
//         <div>
//             <h3>Ball Man Start the game</h3>
//             <p>Your Ball Count :{ball}</p>
//             {
//             ball>6 && <p>over finished</p>
//             }
        
//             <button onClick={handleSingleBall}>Click</button>
//         </div>
//     )
// }