export default function Post({post}){
    return(
        <div className="card">
            <h5>The Post id is :{post.id}</h5>
            <p>The post is : {post.body}</p>
        </div>

    )
}