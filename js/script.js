console.log("Hakuna matata my friends!!");

let removeImageButton = document.querySelector(".js-removeImageButton");
let image = document.querySelector(".image");

removeImageButton.addEventListener("click", () => {
    image.remove();
});

let otherBackground = document.querySelector(".js-otherBackground");
let body = document.querySelector(".body");
let theme = document.querySelector(".theme");

otherBackground.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        theme.innerText = "Jasny";
    } else {
        theme.innerText = "Ciemny";
    }
});