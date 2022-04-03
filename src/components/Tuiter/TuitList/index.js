import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return (
        <ul className={`list-group`}>
            {tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} post={tuit}/>)}
        </ul>
    )
};
export default TuitList;