/*-----SAVE FOR LATER PAGE-----*/

import {myFolder} from "../database/database.js";
import {retrieveFormData} from "../components/buttons.js";

//Display saved items on "Saved for later" page
function displaySavedItems() {

    const savedItems = myFolder[0]["savedItems"];

    //Display if there are saved items in myFolder
    if (savedItems.length > 0) {

        $(".save__subtitle").hide();

        //Iterate over each item in "savedItems" array in myFolder and create a card which will be stored in the savedCards array
        //Savedcards array will then be appended to ".save__group"
        //This map technique was inspired by:  2018. Jquery® Notes For Professionals. [ebook] p.41. 
        //Available at: <https://goalkicker.com/jQueryBook/> [Accessed 20 January 2021]
        const savedCards = savedItems.map(item => {

            //Create item container
            const card = $("<div></div>").addClass("item");

            //Create item image
            const imageContainer = $("<div></div>").addClass("item__image-container");
            const cardLink = $("<a></a>");

            const cardImage = $("<img>").addClass("item__image")
                                        .attr({
                                            src: item.src,
                                            alt: item.alt
                                        });

            //Create container that will contain the item tag and delete button
            const cardTagFormContainer = $("<div></div>").addClass("item__tag-form-container");
            const cardTag = $("<span></span>").addClass("item__tag")
                                              .text(item.file);

            const cardFormContainer = $("<div></div>").addClass("item__form-container");
            const cardForm = $("<form></form>").addClass("form");
            const cardButton = $("<button></button>").addClass("button button--social-border button-delete")
                                                     .attr("type", "button")
                                                     .click(deleteSavedItem);
            const cardIcon = $("<i></i>").addClass("far fa-trash-alt");

            cardButton.append(cardIcon);
            cardForm.append(cardButton);
            cardFormContainer.append(cardForm);
            cardTagFormContainer.append(cardTag, cardFormContainer);

            cardLink.append(cardImage);
            imageContainer.append(cardLink);
            card.append(imageContainer, cardTagFormContainer);

            //Add the correct attributes to each image and blog
            if (item.file === "image") {

                cardLink.attr({
                                href: "./portfolio.html",
                                target: "_top"
                             });


                cardForm.attr("data-image-id", item.id);

            } else if (item.file === "blog") {

                cardLink.attr({
                                href: "./blog.html",
                                target: "_top"
                             });

                cardForm.attr("data-blog-id", item.id);

                //Add blog title to blog item
                const cardTitle = $("<h2></h2>").addClass("item__title")
                                                .text(item.title);

                card.append(cardTitle);
            }

            return card;

        });

        $(".save__group").append(savedCards);

    }
}


//Removes saved item from the "myFolder" array and removes it from the "Saved for Later" page 
//"Save for Later" button associated with the item, will be functional again. 
function deleteSavedItem() {

    const savedItemsArr = myFolder[0]["savedItems"];
    const {dataFile, dataId} = retrieveFormData($(this));
    
    const index = savedItemsArr.findIndex( item => {
       return item.file === dataFile && item.id === dataId;
    });

    savedItemsArr.splice(index, 1);

   localStorage.setItem("myFolder", JSON.stringify(myFolder));

    $(this).closest(".item").remove();

    if (savedItemsArr.length < 1) {
        $(".save__subtitle").show();
    }   
}


/*-----ACCORDION-----*/

//DROP DOWN MENU: Accordion
function accordionToggle() {

    $(".accordion__chevron").toggleClass("is-collapsed");

    $(this).next().slideToggle("slow");

}

//Filter the saved blog posts and images on "Saved for later" page
function filterSavedItems() {

    if ($(this).prop("checked") === true) {

        //Retrieve the radio button/filter value
        const filter = $(this).val();

        //Filter the images/blog post which matches the filter value
        $(".item").filter(function (index, item) {

            //Check if the tag name of each image/post item matches the filter value
            $(item).children(".item__tag-form-container").children(".item__tag").each(function (key, el) {

                const tagName = $(el).text();

                //If tagname and filter does not match, hide the image/blog post item
                if (tagName !== filter && filter !== "all") {

                    $(item).animate({

                        opacity: 0,

                    }, function() {

                        $(item).css("display", "none");
                    });

                    //If the tagname and filer does match, show the image/blog post item
                } else if (tagName === filter && filter !== "all") {

                    $(item).animate({

                        opacity: 1,

                    }, 400).css("display", "block");

                    //If "All" filter is selected, display all saved items
                } else {

                    $(item).animate({

                        opacity: 1,
                        
                    }, 400).css("display", "block");
                }
            });
        });

    }
}


export {displaySavedItems, accordionToggle, filterSavedItems};