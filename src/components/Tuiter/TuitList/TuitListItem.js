import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../actions/tuits-actions";
import TuitStats from "./TuitStats";

const TuitListItem = ({
                          post = {
                              "postedBy": {
                                  "username": "Dani"
                              },
                              "stats": {
                                  "comments": 0,
                                  "retuits": 0,
                                  "dislikes": 0,
                                  "likes": 0
                              },
                              "_id": "62544a1da3937979a751b0f0",
                              "topic": "",
                              "handle": "tolliverdani",
                              "liked": false,
                              "verified": false,
                              "title": "",
                              "time": "now",
                              "logo-image": "../images/profilePicture.jpg",
                              "avatar-image": "../images/profilePicture.jpg",
                              "tuits": "122K",
                              "__v": 0
                          }
                      }) => {

    const dispatch = useDispatch();

    return (
        <>
            <li className={`list-group-item`}>

                {/* Main post container */}
                <div className={`card-body row mt-2 mb-2 m-0 p-0`}>

                    {/* Left-hand side: user icon */}
                    <div className={`col-1 border-0 m-0 p-0`}>
                        <img className={`img-thumbnail rounded-circle border-0 bg-transparent`}
                             src={post["avatar-image"]}
                             alt={post.handle}/>
                    </div>

                    {/* Right-hand side: post content */}
                    <div className={`col-11 align-items-center justify-content-start m-0`}>

                        {/* User details */}
                        <span className={`wd-font-13 m-0`}><strong>{post.postedBy.username}</strong></span>
                        <span
                            className={`fas fa-check-circle text-white small ${post.verified === false ? "d-none" : ""}`}/>
                        <span className={`wd-font-13 small text-muted m-0`}> @{post.handle}</span>
                        <span className={`text-muted small wd-font-13 m-0`}> · {post.time}</span>
                        <i onClick={() => deleteTuit(dispatch, post)}
                           className="fa fa-times float-end" aria-hidden="true"/>

                        {/* Post title */}
                        <p className={`card-text text-white wd-font-15 m-0 mb-2`}>{post.title}</p>

                        {/* Bottom icons */}
                        <div className={`row m-0 p-0`}>
                            {<TuitStats post={post}/>}
                        </div>
                    </div>
                </div>
            </li>
        </>)
};

export default TuitListItem;