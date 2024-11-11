
const images = document.querySelectorAll(".photo");
const xMark = document.querySelector(".closingButton")
const body = document.querySelector("body");




images.forEach((image) => {

    image.addEventListener("click", () => {
        image.classList.toggle("active");
        xMark.classList.toggle("active");
        body.classList.toggle("no-scroll");

    });
});





const navClose = document.querySelector(".navClose");
const navOpen = document.querySelector(".navOpen");
const mobileHeader = document.querySelector(".mainHeader");


navClose.addEventListener("click", () =>{

    mobileHeader.classList.remove("active");
    navOpen.classList.remove("active");
    navClose.classList.add("active");

});

navOpen.addEventListener("click", () =>{

    mobileHeader.classList.add("active");
    navOpen.classList.add("active");
    navClose.classList.remove("active");

});



xMark.addEventListener("click", () =>{

    images.forEach((image) => {
        image.classList.remove("active");
    });
    
    xMark.classList.remove("active");
    body.classList.remove("no-scroll");

});
