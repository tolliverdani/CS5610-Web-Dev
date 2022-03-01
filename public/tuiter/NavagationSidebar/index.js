const NavigationSidebar = (active) => {
    return (`
            <ul class="list-group">
                <a class="list-group-item text-white" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html"> 
                    <i class="fa fa-regular fa-house-user"></i>
                    <span class="d-none d-xl-inline" > Home</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/index.html"> 
                    <i class="fa fa-regular fa-hashtag"></i>
                    <span class="d-none d-xl-inline"> Explore</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'notifications' ? 'active' : ''}" href="#"> 
                    <i class="fa fa-regular fa-bell fa-1x"></i>
                    <span class="d-none d-xl-inline"> Notifications</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'messages' ? 'active' : ''}" href="#"> 
                    <i class="fa fa-regular fa-envelope"></i>
                    <span class="d-none d-xl-inline"> Messages</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'bookmarks' ? 'active' : ''}" href="#"> 
                    <i class="fa fa-regular fa-bookmark"></i>
                    <span class="d-none d-xl-inline"> Bookmarks</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'lists' ? 'active' : ''}" href="#"> 
                    <i class="fa fa-solid fa-list"></i>
                    <span class="d-none d-xl-inline"> Lists</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'profile' ? 'active' : ''}"href="#"> 
                    <i class="fa fa-regular fa-user"></i>
                    <span class="d-none d-xl-inline" > Profile</span>
                </a>
                <a class="list-group-item list-group-item-action align-items-center ${active === 'more' ? 'active' : ''}" href="#"> 
                    <i class="fa fa-solid fa-ellipsis-h"></i>
                    <span class="d-none d-xl-inline"> More</span>
                </a>
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}

export default NavigationSidebar;
