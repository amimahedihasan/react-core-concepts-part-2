import { useEffect, useState } from "react"

export default function Players (){

    const [Players, setPlayers] =useState([])
    // please explain use effects in bangla atar 2 ta onso dara ki bujai
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=> res.json())
        .then(data=> setPlayers(data))

    }, []) 

    return(
        <div className="card">
            <h4>Players: {Players.length}</h4>
            {
                Players.map(player=><li>The player email is {player.email}</li>)

            }
            <h4>Players: {Players.body}</h4>
        </div>
    )
}