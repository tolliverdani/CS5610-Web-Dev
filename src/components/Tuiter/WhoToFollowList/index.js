import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
        <>
            <ul className={`list-group`}>
                <li className={`list-group-item`}>
                    <h6><strong>Who to follow</strong></h6>
                </li>
                {who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;