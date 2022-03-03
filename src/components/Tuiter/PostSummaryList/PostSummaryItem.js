import React from "react";

const PostSummaryItem =
    ({
         post = {
             topic: "Web Development",
             userName: "ReactJS",
             time: "2h",
             title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
             image: "../../../images/react-blue.png",
         }
     }) => {
        return (
            <>
                <li className={`list-group-item`}>
                    <div className={`card-body row mt-2 mb-2 m-0 p-0`}>
                        <div className={`col-9 col-xxl-10 align-items-center justify-content-start m-0`}>
                            <p className={`card-text text-white wd-font-15 text-muted m-0`}>
                                <strong>{post.topic}</strong>
                            </p>
                            <span>
                        <span className={`card-text wd-font-13 m-0`}><strong>{post.userName} </strong></span>
                        <i className={`fas fa-check-circle text-white small`}/>
                        <span className={`card-text text-muted wd-font-13 m-0`}> · {post.time}</span>
                    </span>
                            <p className={`card-text text-white wd-font-15 m-0`}>{post.title}</p>
                        </div>
                        <div className={`col-3 col-xxl-2 rounded-3`}>
                            <img className={`img-thumbnail float-end border-0 rounded-5 bg-transparent`}
                                 src={post.image}
                                 alt="An image"/>
                        </div>
                    </div>
                </li>
            </>
        );
    }

export default PostSummaryItem;