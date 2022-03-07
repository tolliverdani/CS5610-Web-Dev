import React from "react";

import PostItem from "./PostItem";
import posts from "./posts.json"

const PostList = () => {
    return (
        <ul className={`list-group`}>
            {posts.map(posts => {
                return (
                    <PostItem posts={posts}/>
                );
            })
            }
        </ul>
    )
};
export default PostList;