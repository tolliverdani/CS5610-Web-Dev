import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileScreen = () => {

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const [profileData, setProfileData] = useState(profile);

    const profileChangeHandler = (event) => {
        switch (event.target.id) {
            case "profile-name":
                setProfileData({...profileData, handle: event.target.value});
                break;
            case "profile-bio":
                setProfileData({...profileData, bio: event.target.value});
                break;
            case "profile-location":
                setProfileData({...profileData, location: event.target.value});
                break;
            case "profile-website":
                setProfileData({...profileData, website: event.target.value});
                break;
            case "profile-dateOfBirth":
                setProfileData({...profileData, dateOfBirth: event.target.value});
                break;
            default:
                break;
        }
    }
    const saveProfileClickHandler = () => {
        const action = {
            type: 'update-profile', profileData
        };
        dispatch(action);
    }

    return (
        <>
            <br/>

            <div className={"d-block mb-4"}>
                <Link to={"../../tuiter/profile"}><i className={"fa fa-times"} aria-hidden="true"/></Link>
                <Link to={"../../tuiter/profile"} onClick={saveProfileClickHandler}
                        className={"btn border-white rounded-pill float-end"}>Save
                </Link>
            </div>

            <div className={"mt-2 mb-2"}>
                <img
                    className={`img-thumbnail rounded-top border-bottom-0 m-0 p-0 d-flex bg-transparent border-secondary`}
                    src={profile.bannerPicture}
                    alt={"Banner picture for " + profile.handle}/>

                <img className={`img-thumbnail rounded-circle border-1 border-white bg-transparent`}
                     src={profile.profilePicture}
                     alt={"Profile picture for " + profile.handle}/>
            </div>


            <form className={"mt-2"}>
                <div className={"form-group"}>
                    <label htmlFor={"profile-name"} className={"text-muted"}>Handle</label>
                    <input id={"profile-name"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white"}
                           value={profile.handle}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-bio"} className={"text-muted"}>Bio</label>
                    <textarea id={"profile-bio"}
                              className={"form-control border border-dark bg-black text-white"}
                              rows={"3"}
                              value={profile.bio}
                              onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-location"} className={"text-muted"}>Location</label>
                    <input id={"profile-location"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white"}
                           value={profile.location}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-website"} className={"text-muted"}>Website link</label>
                    <input id={"profile-website"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white"}
                           value={profile.website}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-dateOfBirth"} className={"text-muted"}>Date of Birth</label>
                    <input id={"profile-dateOfBirth"}
                           type={"date"}
                           className={"form-control border border-dark bg-black text-white"}
                           value={profile.dateOfBirth}
                           onChange={profileChangeHandler}/>
                </div>
            </form>
        </>
    );
}
export default EditProfileScreen;