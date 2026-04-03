import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){
    const posts = use(postsPromise)
    console.log(posts)
    return(
        <div className="card">
            <h3>All Post are here</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            <h3>There are {posts.length} post here </h3>
        </div>
    )
    
}