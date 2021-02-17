/*-----BLOG PAGE-----*/

import { findBlog } from "../database/database.js";

//Opens selected blog post in post.html
function viewPost() {

    //Retrieve blog id
    const dataId = Number($(this).attr("data-blog-id"));

    const blog = findBlog(dataId);

    sessionStorage.setItem("post", JSON.stringify(blog));

}


export {viewPost};