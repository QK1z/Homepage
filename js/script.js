console.log("Witam i kłaniam się nisko ;)");

let removeImageButton = document.querySelector(".js-removeImageButton");
let image = document.querySelector(".js-header__image");

removeImageButton.addEventListener("click", () => {
    image.remove();
});

let otherBackground = document.querySelector(".js-otherBackground");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-theme");

otherBackground.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    if (body.classList.contains("body--dark")) {
        theme.innerText = "Jasny";
    } else {
        theme.innerText = "Ciemny";
    }
});