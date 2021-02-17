/*----- BUTTONS -----*/

import {findImage, findBlog, imageList, blogList, myFolder} from "../database/database.js";
import {openModal} from "./modal.js";

//LIKE BUTTON:
//Toggle the like button, update the number of likes for the image or blog post
function likeToggle() {

    //Retrieve the user's liked items from "myFolder" array
    let likedItemsArr = myFolder[1]["likedItems"];

    const {dataFile, dataId} = retrieveFormData($(this));

    $(this).toggleClass("is-liked");

    //If the liked item is an image:
    if (dataFile === "image") {

        let image = findImage(dataId);

        //If image was liked
        if ($(this).hasClass("is-liked")) {

            //ANIMATION AND CHAINED EFFECT:
            //When "like" button is clicked (to like the item), increase and then decrease the heart icon font-size
            $(this).children().animate({

                fontSize: "1.2rem"

            }).animate({

                fontSize: "1rem"

            });

            //Increase the number of likes for the image
            image.likes += 1;

            //Add to user's liked items
            likedItemsArr.push(image);

            localStorage.setItem("imageList", JSON.stringify(imageList));

          //When the image is unliked
        } else {

            //Remove image from user's liked items
            const index = likedItemsArr.findIndex(item => {

                return item.id === dataId && item.file === dataFile;

            });

            likedItemsArr.splice(index, 1);

            //Decrease the number of likes for the image
            image.likes -= 1;

            localStorage.setItem("imageList", JSON.stringify(imageList));

        }
        //If the liked item is a blog post
    } else if (dataFile === "blog") {

        const blog = findBlog(dataId);

        if ($(this).hasClass("is-liked")) {

            $(this).children().animate({

                fontSize: "1.2rem"

            }).animate({

                fontSize: "1rem"

            });

            //Increase the number of likes for the blog post
            blog.likes += 1;

            likedItemsArr.push(blog);

            localStorage.setItem("blogList", JSON.stringify(blogList));

            //When the blog post is unliked
        } else {


            const index = likedItemsArr.findIndex(item => {

                return item.id === dataId && item.file === "blog";
            });


            likedItemsArr.splice(index, 1);

            //Decrease the number of likes for the image
            blog.likes -= 1;

            localStorage.setItem("blogList", JSON.stringify(blogList));

        }
    }

    localStorage.setItem("myFolder", JSON.stringify(myFolder));

}

//SAVE BUTTON:
//Save images or blog posts to "myFolder" array which will be displayed in the "Save for Later" page
function saveItem() {

    //Retrieve the user's saved items from "myFolder" array
    let savedItemsArr = myFolder[0]["savedItems"];

    const {dataFile, dataId} = retrieveFormData($(this));

    //Disable save button once clicked.
    $(this).prop("disabled", true).css("opacity", "0.2");

    //If the saved item is an image
    if (dataFile === "image") {

        const image = findImage(dataId);

        savedItemsArr.push(image);

        //If the saved item is a blog post
    } else if (dataFile === "blog") {

        const blog = findBlog(dataId);

        savedItemsArr.push(blog);

    }

    //ALERT: Tells the user how many items are in their "Save for Later" folder
    alert("You have " + savedItemsArr.length + " item(s) in your 'Save for Later' folder.");

    localStorage.setItem("myFolder", JSON.stringify(myFolder));

}

//COMMENT BUTTON:
//Opens comment form to add a comment to the image or post
function openCommentForm() {

    //Retrieve the form associated with the selected image/blog
    const form = $(this).closest("form");

    const {dataFile, dataId} = retrieveFormData($(this));

    //If the comment button is from the photo gallery, display modal and open comment form
    //Insert the imageId into the form  
    if (form.hasClass("gallery__form")) {

        openModal(dataId);
        $(".comment__form-post").show();

    } else if (form.has("#form-modal-social")) { 

        $(".comment__form-post").show();

    } else if (form.has("#form-blog")) {

        $(".comment__form-post").show();

    }

    //Prevent comment form from submitting when user presses enter
    //This does not include textarea (to ensure that paragraphs are created in textarea)
    $("input").keypress(function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });

}


//Retrieves data-* value of the selected image or blog post from the corresponding form
//Returns the file type ("image" or "post") and the data id from the form 
function retrieveFormData(button) {
    //"data-*" attribute is either data-image-id or data-blog-id, depending on whether the form belongs to an image or blog
    //respectively
    const imageId = button.closest("form").attr("data-image-id");
    const blogId = button.closest("form").attr("data-blog-id");
    let dataFile = "";
    let dataId = null;

    if (imageId === undefined) {

        dataFile = "blog";
        dataId = Number(blogId);

    } else if (blogId === undefined) {

        dataFile = "image";
        dataId = Number(imageId);
    }

    return {dataFile, dataId};
}

//Populate the buttons on each page load to display all the user's liked and saved images and posts
//Liked items will have a gold heart and saved items will have reduced opacity/disabled saved button
//"parentElement" represents the container in which the buttons are found on each page
function populateButtons(parentElement) {

    const savedItemsArr = myFolder[0]["savedItems"];
    const likedItemsArr = myFolder[1]["likedItems"];
   
    //Like buttons
    if (likedItemsArr.length > 0) {

        parentElement.find(".button-like").each(function () {

            const {dataFile, dataId} = retrieveFormData($(this));

            //Check if an image/blog post is found in the likedItems array
            const likedItem = likedItemsArr.find(item => {

                return item.file === dataFile && item.id === dataId
            });

            //If image/blog post is present, button will be gold
            if (likedItem) {

                $(this).addClass("is-liked");

            //Buttons that are no longer part of likedItems array but needs to be updated (unliked)
            } else if (!likedItem && $(this).hasClass("is-liked")) { 

                $(this).removeClass("is-liked");

            }

        });

    } else {
        //No items in "likedItems" array, but there are buttons that needs to be updated (unliked)
        parentElement.find(".button-like").each(function () {
            
            if ($(this).hasClass("is-liked")) {

                $(this).removeClass("is-liked");

            }

        });
    }

    //"Save for Later" buttons
    if (savedItemsArr.length > 0) {

        parentElement.find(".button-save").each(function () {

            const {dataFile, dataId} = retrieveFormData($(this));

            //Check if image/blog items is in the savedItemsArr
            const savedItem = savedItemsArr.find(item => {

                return item.file === dataFile && item.id === dataId;

            });

            //If image/blog post is present, disable button
            if (savedItem) {

                $(this).prop("disabled", true).css("opacity", "0.2");

            } else if (!savedItem && $(this).prop("disabled") === true) {

                $(this).prop("disabled", false).css("opacity", "1"); //Update buttons that have been removed from "myFolder"

            }

        });

    } else {

        if ($(this).prop("disabled") === true) {
            
            //Update buttons that have been removed from "myFolder"
            $(this).prop("disabled", false).css("opacity", "1");
            
        }
    }
}


export {likeToggle, saveItem, openCommentForm, retrieveFormData, populateButtons};