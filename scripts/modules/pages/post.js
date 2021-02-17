/*-----POST PAGE-----*/

import {populateComments} from "../components/comment-section.js";
import {populateButtons} from "../components/buttons.js";


//Displays the selected blog post  
function displayBlogPost(blog) {

    //Create article header
    const postTitle = $("<h2></h2>").addClass("post__title")
                                    .text(blog.title);

    const postAuthor = $("<p></p>").addClass("post__author")
                                   .html("by Alexa Isaks &vert; " + blog.datePosted);

    $(".post__header").append(postTitle, postAuthor);

    //Create article image
    const postImage = $("<img>").addClass("post__image")
                                .attr({
                                    src: blog.src,
                                    alt: blog.alt
                                });

    $(".post__image-container").append(postImage);

    //Create paragraphs for text container
    const paragraphs = blog.paragraphs;

    const paragraph = paragraphs.map(para => {

        const text = $("<p></p>").addClass("post__text")
                                 .text(para);
        return text;
    });

    $(".post__text-container").append(paragraph);

    //Add the id of the blog to the social form and the comment form   
    $("#form-blog, #form-comment").attr("data-blog-id", blog.id);

    //Populate comment section with existing comments 
    populateComments(blog);

    //Update the comment count
    $(".comment__comment-count").text(blog.comments.length);

    populateButtons($(".main-post"));
}

export {displayBlogPost};
