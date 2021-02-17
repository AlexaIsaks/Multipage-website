/*-----MODAL-----*/

import {findImage} from "../database/database.js";
import {populateComments} from "./comment-section.js";
import {populateButtons} from "./buttons.js";


//Show/Open modal and display selected image. Add the image id to the social and comment forms  
function openModal(dataId) {

    const image = findImage(dataId);

    //Create an image element for the modal
    const modalImage = $("<img>").addClass("modal__image")
                                 .attr({
                                     src: image.src,
                                     alt: image.alt,
                                     "data-image-id": image.id
                                    });

    $(".modal__image-container").append(modalImage);

    //Add image id to social and comment form
    $("#form-modal-social, #form-comment").attr("data-image-id", dataId);

    //Populate modal form buttons
    populateButtons($(".modal"));

    //Update the number of comments
    $(".comment__comment-count").text(image.comments.length);

    //Add all the existing comments
    populateComments(image);

    //Hide body scroll bars
    $("body").css("overflow", "hidden");

    //SHOW modal
    $(".modal").show();

}

//Hide/close modal
function closeModal() {

    //Remove image and comments, close comment form
    $(".modal__image").remove();
    $(".comment__section").empty();
    $(".comment__form-post").hide();

    //Show body scroll bar
    $("body").css("overflow", "initial");

    //HIDE modal
    $(".modal").hide();
    populateButtons($(".gallery"));

}

export {openModal, closeModal};


