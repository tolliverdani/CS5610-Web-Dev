import NavigationSidebar from "../NavagationSidebar/index.js";
import HomeComponent from "../HomeScreen/HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
            ${HomeComponent()}
        <div class="d-xs-none d-sm-none d-md-none d-lg-block col-lg-4">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);

