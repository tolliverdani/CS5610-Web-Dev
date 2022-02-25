import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">        
            <li class="list-group-item">
                <h6><strong>Who to follow</strong></h6>
            </li>
${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
            
            </ul>
`);
}
export default WhoToFollowList;