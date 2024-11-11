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

xMark.addEventListener("click", () =>{

    images.forEach((image) => {
        image.classList.remove("active");
    });
    
    xMark.classList.remove("active");
    body.classList.remove("no-scroll");

});








