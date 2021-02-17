/*-----PORTFOLIO PAGE-----*/

import {openModal} from "../components/modal.js";

//Display modal when image in portfolio/gallery is selected
function viewImage(event) {

    const field = event.target;
    let dataId = null;

    //".gallery__form-container" is clicked on desktops
    if ($(field).hasClass("gallery__form-container")) {

        dataId = Number($(this).prev().attr("data-image-id"));
        openModal(dataId);

    } else if ($(field).hasClass("gallery__image")) { //".gallery__image" is clicked on mobile and tablets

        dataId = Number($(this).attr("data-image-id"));
        openModal(dataId);

    }

}

export {viewImage};

