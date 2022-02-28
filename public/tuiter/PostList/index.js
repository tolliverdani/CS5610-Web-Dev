import PostItem from "./PostItem.js";
import post from "./posts.js"

const PostList = () => {
    return (`
            <ul class="list-group">        
${
        post.map(posts => {
            return (PostItem(posts));
        }).join('')
    }
        </ul>
`);
}
export default PostList;