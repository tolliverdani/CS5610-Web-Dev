const PostItem = (posts) => {
    return (`
        <li class="list-group-item">
            <div class="card-body row mt-2 mb-2 m-0 p-0">
                <div class="col-1 border-0 m-0 p-0">
                    <img class="img-thumbnail rounded-circle border-0 bg-transparent" src="${posts.icon}" alt="..."/> 
                </div>           
                <div class="col-11 align-items-center justify-content-start m-0">
                        <span>
                            <span class="card-text wd-font-13 m-0"><strong>${posts.user}</strong></span>
                            <i class="fas fa-check-circle text-white small"></i>                        
                            <span class="card-text wd-font-13 text-muted m-0">@${posts.userName}</span>
                            <span class="card-text text-muted wd-font-13 m-0"> · ${posts.time}</span>
                        </span>
                            <i class="fas fa-ellipsis-h text-muted float-end"></i>
                        <p class="card-text text-white wd-font-15 m-0 mb-2">${posts.title}</p>
                    <div class=" m-0 p-0 ">
                        <img class="img-thumbnail rounded-top border-bottom-0 m-0 p-0 d-flex bg-transparent border-secondary"
                             src=${posts.image}
                             alt="An image of ${posts.image}"/>
                    </div>
                    <div class="border border-secondary rounded-bottom ps-2 pe-2 pt-2 p-0 m-0 ${posts.link === '' ? 'd-none' : ''}">
                        <p class="card-text text-white wd-font-15 m-0 mb-2">${posts.linkTitle}</p>
                        <p class="card-text text-muted wd-font-15 m-0 mb-2">${posts.linkDesc}</p>
                        <p class="card-text text-muted wd-font-15 m-0 mb-2"><i class="fa fa-link" aria-hidden="true"></i> ${posts.link}</p>
                    </div>
                    <div class="row m-0 p-0">
                        <div class="d-flex justify-content-between text-muted m-0 p-0 mt-2">
                            <span><i class="fa fa-comment" aria-hidden="true" href="#"></i> ${posts.commentCount}</span>
                            <span> <i class="fa fa-retweet" aria-hidden="true" href="#"></i> ${posts.retweetCount}</span>
                            <span><i class="fa fa-heart" aria-hidden="true" href="#"></i> ${posts.likes}</span>
                            <i class="fa fa-share" aria-hidden="true"></i>
                            </br>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        `);
}

export default PostItem;