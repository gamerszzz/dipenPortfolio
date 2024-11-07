const images = document.querySelectorAll(".photo");
const xMark = document.querySelector(".closingButton")


images.forEach((image) => {

    image.addEventListener("click", () => {
        image.classList.toggle("active");
        xMark.classList.toggle("active");

    });
});

xMark.addEventListener("click", () =>{

    images.forEach((image) => {
        image.classList.remove("active");
    });
    
    xMark.classList.toggle("active");

});





