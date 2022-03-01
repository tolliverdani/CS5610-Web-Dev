const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="card-body row mt-2 mb-2 m-0 p-0">
                <div class="col-9 col-xxl-10 align-items-center justify-content-start m-0">
                    <p class="card-text text-white wd-font-15 text-muted m-0"><strong>${post.topic}</strong></p>
                    <span>
                        <span class="card-text wd-font-13 m-0"><strong>${post.userName}</strong></span>
                        <i class="fas fa-check-circle text-white small"></i>                        
                        <span class="card-text text-muted wd-font-13 m-0"> · ${post.time}</span>
                    </span>
                    <p class="card-text text-white wd-font-15 m-0">${post.title}</p>
                </div>
                <div class="col-3 col-xxl-2 rounded-3">
                    <img class="img-thumbnail float-end border-0 rounded-5 bg-transparent"
                         src=${post.image}
                         alt="An image of ${post.image}"/>
                </div>
            </div>
        </li>
        `);
}

export default PostSummaryItem;