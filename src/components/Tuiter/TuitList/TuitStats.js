import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeTuit = () => {
        dispatch({type: 'like-tuit',
            tuit: tuit});
    };

    return (
        <div className={`d-flex justify-content-between text-muted m-0 p-0 mt-2`}>
            <span><i className={`fa fa-comment`}
                     aria-hidden="true"/> {tuit.stats.comments}</span>
            <span><i className={`fa fa-retweet`}
                     aria-hidden="true"/> {tuit.stats.retuits}</span>
            <span onClick={likeTuit}>
                {tuit.liked && <i className="fa fa-heart me-1" style={{color: 'red'}}/>}
                {!tuit.liked && <i className="fa fa-heart me-1"/>}
                {tuit.stats && tuit.stats.likes}
        </span>
            <span><i className={`fa fa-share`}
                     aria-hidden="true"/>
            </span>
            <br/>
        </div>
    );
}
export default TuitStats;