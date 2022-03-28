import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import EditProfileScreen from "./EditProfileScreen";

const Index = () => {

    const profile = useSelector((state) => state.profile);

    return (
        <>
            <div className={'row'}>
                <span className={"col-1 fa fa-arrow-left"} aria-hidden="true"/>
                <span className={"col-11"}>
                    <p className={"text-white m-0 p-0"}><strong>{profile.firstName} {profile.lastName}</strong></p>
                    <p>{profile.numTuits} Tweets</p>
                </span>
            </div>

            <img
                className={`img-thumbnail rounded-top border-bottom-0 m-0 p-0 d-flex bg-transparent border-secondary`}
                src={profile.bannerPicture}
                alt={"Banner picture for " + profile.handle}/>

            <img className={`img-thumbnail rounded-circle border-1 border-white bg-transparent`}
                 src={profile.profilePicture}
                 alt={"Profile picture for " + profile.handle}/>

            <Link to={"../../tuiter/edit-profile"} className={"btn border-white rounded-pill float-end"}>Edit Profile</Link>

            <div>
                <p className={"text-white m-0 p-0"}><strong>{profile.firstName} {profile.lastName}</strong></p>
                <p className={"text-muted m-0 p-0"}>@{profile.handle}</p>
                <p className={"m-0 p-0"}>{profile.bio}</p>
            </div>

            <div className={"d-flex text-muted"}>
                <span className={"pe-4"}><i className="fa fa-map-marker" aria-hidden="true"/> {profile.location}</span>
                <span className={"pe-4"}><i className="fa fa-birthday-cake" aria-hidden="true"/> {profile.dateOfBirth}</span>
                <span className={"pe-4"}><i className="fa fa-calendar" aria-hidden="true"/> {profile.dateJoined}</span>
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