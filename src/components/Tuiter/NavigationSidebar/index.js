import React from "react";

const NavigationSidebar =
    ({
         active = 'explore'
     }) => {
        return (
            <>
                <ul className={`list-group`}>
                    <a className={`list-group-item text-white`} href="/">
                        <i className={`fab fa-twitter`}/>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'home' ? 'active' : ''}`}
                       href="../HomeScreen/index.html">
                        <i className={`fa fa-regular fa-house-user`}/>
                        <span className={`d-none d-xl-inline`}> Home</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'explore' ? 'active' : ''}`}
                       href="../ExploreScreen/index.html">
                        <i className={`fa fa-regular fa-hashtag`}/>
                        <span className={`d-none d-xl-inline`}> Explore</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'notifications' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-regular fa-bell fa-1x`}/>
                        <span className={`d-none d-xl-inline`}> Notifications</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'messages' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-regular fa-envelope`}/>
                        <span className={`d-none d-xl-inline`}> Messages</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'bookmarks' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-regular fa-bookmark`}/>
                        <span className="d-none d-xl-inline"> Bookmarks</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'lists' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-solid fa-list`}/>
                        <span className={`d-none d-xl-inline`}> Lists</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'profile' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-regular fa-user`}/>
                        <span className={`d-none d-xl-inline`}> Profile</span>
                    </a>
                    <a className={`list-group-item list-group-item-action align-items-center ${active === 'more' ? 'active' : ''}`}
                       href="#">
                        <i className={`fa fa-solid fa-ellipsis-h`}/>
                        <span className={`d-none d-xl-inline`}> More</span>
                    </a>
                </ul>
                <div className={`d-grid mt-2`}>
                    <a className={`btn btn-primary btn-block rounded-pill`} href="tweet.html">Tweet</a>
                </div>
            </>
        );
    };

export default NavigationSidebar;
