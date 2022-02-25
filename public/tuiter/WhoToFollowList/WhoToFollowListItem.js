const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row align-items-center">
                <img class="col-2 rounded-circle"
                     src=${who.avatarIcon}
                     alt="icon image for ${who.userName}">
                <div class="col-7 mb-2">
                    <p class="m-0"><strong>${who.userName}</strong></p>
                    <p class="m-0">@${who.handle}</p>
                </div>
                <div class="col-3">
                    <a href="#"
                       class="btn btn-primary rounded-pill">Follow</a>
                </div>
            </div>
        </li>
        `);
}

export default WhoToFollowListItem;