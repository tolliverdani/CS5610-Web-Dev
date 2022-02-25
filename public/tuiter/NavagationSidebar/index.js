const NavigationSidebar = () => {
    return (`
            <ul class="list-group">
                <a class="list-group-item text-white" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-house-user"></i>
                    <span class="d-none d-xl-inline" href="home.html"> Home</span>
                </li>
                <li class="list-group-item active justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-hashtag"></i>
                    <span class="d-none d-xl-inline" href="explore.html"> Explore</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-bell fa-1x"></i>
                    <span class="d-none d-xl-inline" href="notifications.html"> Notifications</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-envelope"></i>
                    <span class="d-none d-xl-inline" href="messages.html"> Messages</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-bookmark"></i>
                    <span class="d-none d-xl-inline" href="bookmarks.html"> Bookmarks</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-solid fa-list"></i>
                    <span class="d-none d-xl-inline" href="lists.html"> Lists</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-regular fa-user"></i>
                    <span class="d-none d-xl-inline" href="profile.html"> Profile</span>
                </li>
                <li class="list-group-item list-group-item-action justify-content-between align-items-center"> 
                    <i class="fa fa-solid fa-ellipsis-h"></i>
                    <span class="d-none d-xl-inline" href="more.html"> More</span>
                </li>
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}

export default NavigationSidebar;
