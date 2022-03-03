import React from "react";

const WhoToFollowListItem =
    ({
         who = {
             avatarIcon: '../../../images/NASA.png',
             userName: 'NASA',
             handle: 'NASA',
         }
     }) => {
        return (
            <>
                <li className={`list-group-item`}>
                    <div className={`row align-items-center`}>
                        <img className={`col-2 rounded-circle float-start`}
                             src={who.avatarIcon}
                             width="48"
                             alt="icon image"/>
                        <div className={`col-6 mb-2`}>
                            <p className={`m-0`}><strong>{who.userName}</strong></p>
                            <p className={`m-0`}>@{who.handle}</p>
                        </div>
                        <div className={`col-4`}>
                            <a href="#" className={`btn btn-primary rounded-pill float-end`}>Follow</a>
                        </div>
                    </div>
                </li>
            </>
        );
    }

export default WhoToFollowListItem;