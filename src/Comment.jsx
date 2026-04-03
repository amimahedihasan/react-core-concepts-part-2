export default function Comment({comment}) {
    return (
        <div className="card">
            <h3>All Comment Loading In this Section</h3>
            <h3>The Comment Name is {comment.name}</h3>
            <h2>The total Comment is {comment.body} </h2>
        </div>
    )
}