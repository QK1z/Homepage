let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");

switch (day) {
    case "poniedziałek":
    case "wtorek":
        howMuch.innerText = "dużo";
        break;

    case "środa":
    case "czwartek":
        howMuch.innerText = "trochę";
        break;

    default:
        howMuch.innerText = "mało";
}

howMuch.innerText = (day === "poniedziałek" || day === "wtorek")
    ? "dużo"
    : (
        (day === "środa" || day === "czwartek")
            ? "trochę"
            : "mało"
    );

if (day === "poniedziałek" || day === "wtorek") {
    howMuch.innerText = "dużo";
} else if (day === "środa" || day === "czwartek") {
    howMuch.innerText = "trochę";
} else {
    howMuch.innerText = "mało";

}