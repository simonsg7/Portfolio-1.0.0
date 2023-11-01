let btnGoUp = document.getElementById(`up`);

btnGoUp.addEventListener(`click`, goUp);

function goUp() {
    scrollTo(top);
}

let nightStyle = document.querySelector(".icon-eclipse");
let dayStyle = document.querySelector(".icon-sun");
let colorDocument = document.querySelector("link#changeStyle");
let paperStyle = colorDocument.getAttribute('href');

function color() {
    let paperStyle = colorDocument.getAttribute('href');
    switch (paperStyle) {
        case 'day-style.css':
            dayStyle.style.display = "block";
            nightStyle.style.display = "none";
            colorDocument.setAttribute('href', 'night-style.css');
            break;
        default:
            dayStyle.style.display = "none";
            nightStyle.style.display = "block";
            colorDocument.setAttribute('href', 'day-style.css');
            break;
    }
}