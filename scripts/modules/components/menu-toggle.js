/*-----MOBILE MENU TOGGLE-----*/

//DROP DOWN MOBILE MENU
const menu = $(".hamburger");
const nav = $(".nav");
const bars = $(".hamburger__bar");

//Labels for the 3 hamburger bars
const barLabels = ["top", "center", "bottom"];

//Open and close the menu on mobile
menu.click(function () {

    nav.toggleClass("is-open");

    if (nav.hasClass("is-open")) {

        closeMenu();

    } else {

        openMenu();
    }

});

//Open the menu; convert hamburger menu to a cross
function openMenu() {

    nav.slideDown(1000);

    //Add appropriate classlist to each hamburger bar to perform animation
    for (let i = 0; i < bars.length; i++) {

        $(bars[i]).addClass("hamburger__bar--" + barLabels[i]);
    }
}

//Close the menu; convert cross to hamburger menu
function closeMenu() {

    nav.slideUp(1000);

    //Remove appropriate classlist to each hamburger bar to perform animation
    for (let i = 0; i < bars.length; i++) {

        $(bars[i]).removeClass("hamburger__bar--" + barLabels[i]);
    }
}
