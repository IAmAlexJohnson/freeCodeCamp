

window.onload = function() {
    let navBar = document.getElementById('nav-bar');

    window.onscroll = function () { 

        "use strict";
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
            navBar.classList.add("nav-colored");
            navBar.classList.remove("nav-transparent");
            
        } 

        else {
            navBar.classList.add("nav-transparent");
            navBar.classList.remove("nav-colored");
        }
    };
}