//Capestone Project: Add functionality to the website

import {imageList, blogList, myFolder, updateImageList, updateBlogList, updateMyFolder} from "./modules/database/database.js";
import {viewImage} from "./modules/pages/portfolio.js";
import {viewPost} from "./modules/pages/blog.js";
import {displayBlogPost} from "./modules/pages/post.js";
import {displaySavedItems, accordionToggle, filterSavedItems} from "./modules/pages/save-for-later.js";
import "./modules/components/menu-toggle.js";
import {closeModal} from "./modules/components/modal.js";
import {postComment, cancelComment} from "./modules/components/comment-section.js";
import {likeToggle, saveItem, openCommentForm, populateButtons} from "./modules/components/buttons.js";

/*
There are three module folders:
1) Pages (page specific functions)
2) Components 
3) Database (imageList, blogList, myFolder arrays)
*/

//When the document is ready, the following will be carried out for each page as well as additional functionality for specific
//pages. 
$(function() {

    //Extract html file name from the pathname
    const path = window.location.pathname;
    const regExp = /([a-z]+\-?)+\.\bhtml/gi;
    const pageArr = path.match(regExp);
    const page = pageArr[0]

    //NAVIGATION:
    //Navigation active state: Underline the navigation link that corresponds to the current open page
    $(".nav__link").each(function() {

        const href = $(this).attr("href");
        const hrefPage = href.match(regExp)

        //Compare navigation link's href to pathname
        if (page === hrefPage[0]) {

            $(this).addClass("is-active");

        }
    });


    //POPULATE WEBSITE DATA:
    //If this is the user's first visit then add "imageList", "blogList" and "myFolder" arrays to localstorage

    //imageList array
    if (localStorage.getItem("imageList") === null) {

        localStorage.setItem("imageList", JSON.stringify(imageList));

    } else {

        //If it is not the first visit, update the array.
        updateImageList();          

    }

    //blogList array
    if (localStorage.getItem("blogList") === null) {

       localStorage.setItem("blogList", JSON.stringify(blogList));

    } else {

        updateBlogList();

    }

    //myFolder array
    if (localStorage.getItem("myFolder") === null) {

       localStorage.setItem("myFolder", JSON.stringify(myFolder));

    } else {

        updateMyFolder();

    }

    //GENERAL BUTTONS
    //Add eventlisteners to general buttons
    $(".button-like").click(likeToggle);
    $(".button-save").click(saveItem);
    $(".button-comment").click(openCommentForm);
    $(".button-post").click(postComment);
    $(".button-cancel").click(cancelComment);


    //SPECIFIC FUNCTIONALITY FOR DIFFERENT PAGES
    //portfolio.html
    if (page === "portfolio.html") {

        $(".gallery__form-container, .gallery__image").click(viewImage);
        populateButtons($(".gallery"));
        $(".modal__close").click(closeModal);
 
    }

    //blog.html
    if (page === "blog.html") {

        $(".entery__image, .entery__title-link").click(viewPost);
        populateButtons($(".blog__entries"));
        
    }

    //post.html
    if (page === "post.html") {
       
        const blog = JSON.parse(sessionStorage.getItem("post"));
        displayBlogPost(blog);
    
    }

    //save-for-later.html
    if (page === "save-for-later.html") {

        $(".accordion__button").click(accordionToggle);
        $(".accordion__input").click(filterSavedItems);
        displaySavedItems();

    }

    
    //End ready()
});


