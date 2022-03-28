import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem = ({
                          post = {
                              "_id": "123",
                              "topic": "Web Development",
                              "postedBy": {
                                  "username": "ReactJS"
                              },
                              "liked": true,
                              "verified": false,
                              "handle": "ReactJS",
                              "time": "2h",
                              "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                              "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              "attachments": {
                                  "video": "unKvMC3Y1kI"
                              },
                              "logo-image": "../../../images/react-blue.png",
                              "avatar-image": "../../../images/react-blue.png",
                              "stats": {
                                  "comments": 123,
                                  "retuits": 234,
                                  "likes": 345
                              }
                          }
                      }) => {

        const parse = require('html-react-parser');

        const attachments = (post) => {
            if (!post.hasOwnProperty("attachments")) return;
            if (post.attachments.hasOwnProperty("video")) {
                return (
                    <iframe width="560"
                            height="315"
                            src={"https://www.youtube.com/embed/" + post.attachments.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>);
            }

            if (post.attachments.hasOwnProperty("image")) {
                return (
                    <img
                        className={`img-thumbnail rounded-top border-bottom-0 m-0 p-0 d-flex bg-transparent border-secondary`}
                        src={post.attachments.image}
                        alt={post.title}/>);
            }
        }

        const dispatch = useDispatch();
        const deleteTuit = (tuit) => {
            dispatch({type: 'delete-tuit', tuit})
        };

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
                            <span className={`wd-font-13 m-0`}><strong>{post.postedBy.username} </strong></span>
                            <span
                                className={`fas fa-check-circle text-white small ${post.verified === false ? "d-none" : ""}`}/>
                            <span className={`wd-font-13 text-muted m-0`}> @{post.handle}</span>
                            <span className={`text-muted wd-font-13 m-0`}> · {post.time}</span>
                            <i onClick={() => deleteTuit(post)}
                               className="fa fa-times float-end" aria-hidden="true"/>

                            {/* Post title */}
                            <p className={`card-text text-white wd-font-15 m-0 mb-2`}>{parse(post.tuit)}</p>

                            {attachments(post)}

                            {/* Bottom icons */}
                            <div className={`row m-0 p-0`}>
                                {<TuitStats tuit={post}/>}
                            </div>
                        </div>
                    </div>
                </li>
            </>)
    }
;

export default TuitListItem;