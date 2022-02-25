import NavigationSidebar from "../NavagationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
            ${ExploreComponent()}
        <div class="d-xs-none d-sm-none d-md-none d-lg-block col-lg-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

