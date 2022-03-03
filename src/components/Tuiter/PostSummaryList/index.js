import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./post.json"

const PostSummaryList = () => {
    return (
        <ul className={`list-group`}>
            {posts.map(post => {
                return (
                    <PostSummaryItem post={post}/>
                );
            })
            }
        </ul>
    );
}
export default PostSummaryList;