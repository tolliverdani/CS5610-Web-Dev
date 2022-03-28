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
            <div className={"mb-4 align-items-center"}>
                <Link to={"../../tuiter/profile"}>
                    <i className={"fa fa-times m-0"} aria-hidden="true"/></Link>
                <Link to={"../../tuiter/profile"}
                      onClick={saveProfileClickHandler}
                      className={"btn btn-sm border-white rounded-pill float-end m-0"}>Save
                </Link>
            </div>

            <img
                className={`img-thumbnail wd-overlap m-0 p-0 d-flex bg-transparent border-0`}
                src={profile.bannerPicture}
                alt={"Banner picture for " + profile.handle}/>

            <img
                className={`img-thumbnail wd-profile-image wd-shift-up rounded-circle border-2 ms-2 p-0`}
                src={profile.profilePicture}
                alt={"Profile picture for " + profile.handle}/>

            <form>
                <div className={"form-group"}>
                    <label htmlFor={"profile-name"} className={"text-muted"}>Handle</label>
                    <input id={"profile-name"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white p-1"}
                           placeholder={profile.handle}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-bio"} className={"text-muted"}>Bio</label>
                    <textarea id={"profile-bio"}
                              className={"form-control border border-dark bg-black text-white p-1"}
                              rows={"3"}
                              placeholder={profile.bio}
                              onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-location"} className={"text-muted"}>Location</label>
                    <input id={"profile-location"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white p-1"}
                           placeholder={profile.location}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-website"} className={"text-muted"}>Website link</label>
                    <input id={"profile-website"}
                           type={"text"}
                           className={"form-control border border-dark bg-black text-white p-1"}
                           placeholder={profile.website}
                           onChange={profileChangeHandler}/>
                    <label htmlFor={"profile-dateOfBirth"} className={"text-muted"}>Date of Birth</label>
                    <input id={"profile-dateOfBirth"}
                           type={"date"}
                           className={"form-control border border-dark bg-black text-white p-1"}
                           placeholder={profile.dateOfBirth}
                           onChange={profileChangeHandler}/>
                </div>
            </form>
        </>
    );
}
export default EditProfileScreen;