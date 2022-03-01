import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="col-lg-6 col-xl-6 col-10">

            <!-- Search bar -->
            <div class="row align-items-center ms-2 m-2">
                <div class="d-flex col-11 align-items-center bg-white rounded-pill">
                    <i class="fas fa-search text-muted"></i>
                    <input type="text" class="form-control bg-transparent border-0" placeholder="Search Tuiter">
                </div>

                <div class="col-1" href="#">
                    <i class="fas fa-cog fa-2x text-primary"></i>
                </div>
            </div>
            
            <!-- Center navigation menu -->
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#"><strong>For you</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><strong>Trending</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><strong>News</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><strong>Sports</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#"><strong>Entertainment</strong></a>
                </li>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="position-relative rounded-0">
                <img class="card-img rounded-0"
                     src="../images/Stars.jpg"
                     alt="Card image cap">
                <div class="position-absolute bottom-0 ms-2">
                    <h4 class="text-white"><strong>Counting the stars in the sky</strong></h4>
                </div>
           </div>
           
           ${PostSummaryList()}
           
           </div>
    `);
}
export default ExploreComponent;
