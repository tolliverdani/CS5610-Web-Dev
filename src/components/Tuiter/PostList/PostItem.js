import React from "react";

const PostItem = ({
                      posts = {
                          topic: "Web Development",
                          userName: "ReactJS",
                          time: "2h",
                          title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                          image: "../../../Tuiter/images/react-blue.png",
                      }
                  }) => {
    return (<>
            <li className={`list-group-item`}>
                <div className={`card-body row mt-2 mb-2 m-0 p-0`}>
                    <div className={`col-1 border-0 m-0 p-0`}>
                        <img className={`img-thumbnail rounded-circle border-0 bg-transparent`}
                             src={posts.icon}
                             alt=""/>
                    </div>
                    <div className={`col-11 align-items-center justify-content-start m-0`}>
                        <span>
                            <span className={`card-text wd-font-13 m-0`}><strong>{posts.user} </strong></span>
                            <i className={`fas fa-check-circle text-white small`}/>
                            <span className={`card-text wd-font-13 text-muted m-0`}> @{posts.userName}</span>
                            <span className={`card-text text-muted wd-font-13 m-0`}> · {posts.time}</span>
                        </span>
                        <i className={`fas fa-ellipsis-h text-muted float-end`}/>
                        <p className={`card-text text-white wd-font-15 m-0 mb-2`}>{posts.title}</p>
                        <div className={`m-0 p-0 `}>
                            <img
                                className={`img-thumbnail rounded-top border-bottom-0 m-0 p-0 d-flex bg-transparent border-secondary`}
                                src={posts.image}
                                alt=""/>
                        </div>
                        <div className={`border border-secondary rounded-bottom ps-2 pe-2 pt-2 p-0 m-0 {posts.link === '' ? 'd-none' : ''}`}>
                            <p className={`card-text text-white wd-font-15 m-0 mb-2`}>{posts.linkTitle}</p>
                            <p className={`card-text text-muted wd-font-15 m-0 mb-2`}>{posts.linkDesc}</p>
                            <p className={`card-text text-muted wd-font-15 m-0 mb-2`}>
                                <i className="fa fa-link" aria-hidden="true"/> {posts.link} </p>
                        </div>
                        <div className={`row m-0 p-0`}>
                            <div className={`d-flex justify-content-between text-muted m-0 p-0 mt-2`}>
                                    <span><i className={`fa fa-comment`} aria-hidden="true"
                                             href="#"/> {posts.commentCount}</span>
                                <span><i className={`fa fa-retweet`} aria-hidden="true"
                                         href="#"/> {posts.retweetCount}</span>
                                <span><i className={`fa fa-heart`} aria-hidden="true"
                                         href="#"/> {posts.likes}</span>
                                <i className={`fa fa-share`} aria-hidden="true"/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>)
};

export default PostItem;