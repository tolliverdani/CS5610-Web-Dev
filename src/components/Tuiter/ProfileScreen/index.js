import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Index = () => {

    const profile = useSelector((state) => state.profile);

    return (
        <>
            <div className={"row align-items-center mt-2"}>
                <span className={"col-1 fa fa-arrow-left"} aria-hidden="true"/>
                <span className={"col-11 mb-2"}>
                    <p className={"text-white m-0 p-0"}><strong>{profile.firstName} {profile.lastName}</strong></p>
                    <p className={"m-0 p-0 small"}>{profile.numTuits} Tweets</p>
                </span>
            </div>

            <img
                className={`img-thumbnail wd-overlap m-0 p-0 d-flex bg-transparent border-0`}
                src={profile.bannerPicture}
                alt={"Banner picture for " + profile.handle}/>

            <img className={`img-thumbnail wd-profile-image wd-shift-up rounded-circle border-2 ms-2 p-0`}
                 src={profile.profilePicture}
                 alt={"Profile picture for " + profile.handle}/>

            <Link to={"../../tuiter/edit-profile"}
                  className={"btn btn-sm border-white rounded-pill float-end mt-2 mb-4"}>Edit Profile</Link>

            <div>
                <p className={"text-white m-0 p-0 mb-1"}><strong>{profile.firstName} {profile.lastName}</strong></p>
                <p className={"text-muted m-0 p-0 mb-1"}>@{profile.handle}</p>
                <p className={"m-0 p-0 mb-1"}>{profile.bio}</p>
            </div>

            <div className={"d-flex text-muted mb-1"}>
                    <span className={"pe-4"}><i className="fa fa-map-marker"
                                                aria-hidden="true"/> {profile.location}</span>
                <span className={"pe-4"}><i className="fa fa-birthday-cake"
                                            aria-hidden="true"/> {profile.dateOfBirth}</span>
                <span className={"pe-4"}><i className="fa fa-calendar"
                                            aria-hidden="true"/> {profile.dateJoined}</span>
            </div>

            <div>
                <span className={"text-white"}><strong>{profile.followingCount}</strong></span>
                <span className={"text-muted pe-4"}> Following</span>
                <span className={"text-white"}><strong>{profile.followersCount}</strong></span>
                <span className={"text-muted pe-4"}> Followers</span>
            </div>
        </>
    );
}
export default Index;