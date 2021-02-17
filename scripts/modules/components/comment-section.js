  /*-----COMMENT SECTION-----*/

import { imageList, blogList, findImage, findBlog } from "../database/database.js";
import {retrieveFormData} from "./buttons.js";


//Comment form submission
function postComment(e) {

    e.preventDefault();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Retrieve comment form inputs
    const username = $("#username").val();
    //The "comment" property of the Comment object will be an array of paragraphs
    //To preserve the paragraph format obtained from the textarea, each paragraph
    //is placed as a separate array item
    const comment = $("#comment").val().split("\n").filter(para => {
        return para !== ""; //Removes blank spaces
    });

    //Determine the date posted       
    const fullDate = new Date();
    const datePosted = fullDate.getDate() + " " + months[fullDate.getMonth()] + " " + fullDate.getFullYear();

    //Create a unique id for the comment
    let commentId = Math.random() * 100;
    commentId = commentId.toFixed(3);

    //Create a Comment object
    const post = new Comment(commentId, username, comment, datePosted);

    const {dataFile, dataId} = retrieveFormData($(this));

    //Add comment to correct image or blog post 
    if (dataFile === "image") {

        let image = findImage(dataId);

        image["comments"].push(post);

        //Update comment count on page
        $(".comment__comment-count").text(image.comments.length);

        localStorage.setItem("imageList", JSON.stringify(imageList));


    } else if (dataFile === "blog") {

        let blog = findBlog(dataId);

        blog["comments"].push(post);

        $(".comment__comment-count").text(blog.comments.length);

        localStorage.setItem("blogList", JSON.stringify(blogList));

    }

    //Display comment in comment section
    displayComment(commentId, username, comment, datePosted);

    //Reset form values
    $("#username").val("");
    $("#comment").val("");

    $(".comment__form-post").hide();

}

//Cancels comment submission
function cancelComment() {
    
    $("#username").val("");
    $("#comment").val("");
    $(".comment__form-post").hide();

}

//Create Comment object 
function Comment(commentId, username, comment, datePosted) {
    this.commentId = commentId,
    this.username = username,
    this.comment = comment,
    this.datePosted = datePosted
}


//Create and display image or blog post comment
function displayComment(commentId, username, comment, datePosted) {

    //Create comment container
    const userComment = $("<div></div>").addClass("comment__user-comment")
                                        .attr("data-comment-id", commentId);

    //Create user details and post date
    const userDetailsContainer = $("<div></div>").addClass("comment__user-details-container");

    const user = $("<span></span>").addClass("comment__user")
                                   .text(username);

    const date = $("<span></span>").addClass("comment__date")
                                   .text(datePosted);

    const bullet = $("<span></span>").addClass("comment__bullet")
                                     .html("&#8226;");


    userDetailsContainer.append(user, bullet, date);

    //Create message container with paragraphs
    const messageContainer = $("<div></div>").addClass("comment__message");

    const paragraph = comment.map(para => {
        return $("<p></p>").addClass("comment__text")
                           .text(para);
    });

    messageContainer.append(paragraph);

    userComment.append(userDetailsContainer, messageContainer);

    $(".comment__section").append(userComment);

}

//Populate comment section with existing comments for each page load
function populateComments(file) {

    const comments = file.comments;

    comments.forEach(comment => {
        displayComment(comment.commentId, comment.username, comment.comment, comment.datePosted);
    });

}


export {postComment, cancelComment, Comment, displayComment, populateComments};
