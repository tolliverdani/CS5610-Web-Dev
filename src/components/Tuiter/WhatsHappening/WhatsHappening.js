import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {createTuit, deleteTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {

    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({title: ""});

    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-2 border-0"}>
                        <img className={`img-thumbnail rounded-circle border-0 bg-transparent`}
                             src={"../images/profilePicture.jpg"}
                             alt={"dtolliver"}/>
                    </div>
                    <div className={"col-10"}>
                        <div className={"row d-flex mb-2"}>
                            <textarea className={"border-0 bg-transparent text-dark small"}
                                      placeholder={"What's happening?"}
                                      onChange={(event) =>
                                          setNewTuit({
                                              ...newTuit,
                                              title: event.target.value})}/>
                        </div>
                        <div className={"align-items-center"}>
                            <div className={"d-flex align-items-center justify-content-between"}>
                                <i className="fa fa-image text-primary" aria-hidden="true"/>
                                <i className="fa fa-chart-bar text-primary" aria-hidden="true"/>
                                <i className="fa fa-smile text-primary" aria-hidden="true"/>
                                <i className="fa fa-calendar text-primary" aria-hidden="true"/>
                                <button className={"ms-4 rounded-pill btn-sm btn-primary float-end"}
                                        onClick={() => createTuit(dispatch, newTuit)}>
                                    Tuit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}
export default WhatsHappening;