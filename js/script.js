const welcome = () => {
    console.log("Witam i kłaniam się nisko ;)");
};

const hideImageButton = document.querySelector(".js-hideImageButton");
const image = document.querySelector(".js-header__image");

hideImageButton.addEventListener("click", () => {
    image.classList.toggle("hidden");
    hideImageButton.textContent = image.classList.contains("hidden") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
});

const otherBackground = document.querySelector(".js-otherBackground");
const body = document.querySelector(".js-body");
const theme = document.querySelector(".js-theme");

otherBackground.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    theme.textContent = body.classList.contains("body--dark") ? "Jasny" : "Ciemny";
});