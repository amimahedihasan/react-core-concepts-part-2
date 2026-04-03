import { use } from "react"
import Comment from "./Comment"


export default function Comments({commentsPromise}){
    const comments = use(commentsPromise)
    console.log(comments)
    return(
        <div className="card">
            <h3>All Comment Loading In this Section</h3>
            <h2>The total Comment is {comments.length} </h2>
            {
                comments.map(comment=><Comment id={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}