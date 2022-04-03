import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className={`d-flex justify-content-between text-muted m-0 p-0 mt-2`}>
            <span>
                <i className={`fa fa-comment`} aria-hidden="true"/> {tuit.stats.comments}
            </span>
            <span>
                <i className={`fa fa-retweet`} aria-hidden="true"/> {tuit.stats.retuits}
            </span>
            <span>
                <i onClick={() => updateTuit(dispatch,
                    {...tuit,
                        stats: {...tuit.stats, likes: tuit.stats.likes + 1}})}
                   className="far fa-thumbs-up ms-2"/> {tuit.stats.likes}
            </span>
            <span>
                <i onClick={() => updateTuit(dispatch,
                    {...tuit,
                        stats: {...tuit.stats, dislikes: tuit.stats.dislikes + 1}})}
                   className="far fa-thumbs-down ms-2"/> {tuit.stats.dislikes}
            </span>
            <span>
                <i className={`fa fa-share`} aria-hidden="true"/>
            </span>
            <br/>
        </div>
    );
}
export default TuitStats;