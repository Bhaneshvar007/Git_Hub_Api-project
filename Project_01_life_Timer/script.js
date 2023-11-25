let isDOBOpen = false;
let dateOfBorth;
const setingIcon = document.querySelector(".setting")
const setingContent = document.querySelector(".setting-content")
const beforeEcecution = document.querySelector("#before-ececution")
const afterEcecution = document.querySelector("#after-ececution")
const AddDateBtn = document.querySelector("#Add-date-btn");
const dateEl = document.querySelector("#date");

let yearsEl = document.getElementById("year");
let monthsEl = document.getElementById("month");
let daysEl = document.getElementById("day");
let hoursEl = document.getElementById("hour");
let minuteEl = document.getElementById("min");
let secoundEl = document.getElementById("sec");

function dateSelectore() {
    if (isDOBOpen) {
        setingContent.classList.add("hide");
    }
    else {
        setingContent.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
}
setingIcon.addEventListener("click", dateSelectore);

function chooseDateIp() {
    dateOfBorth = dateEl.value;
    if (dateOfBorth) {
        beforeEcecution.classList.add("hide")
        afterEcecution.classList.remove("hide")
        updateSection();
    }
    else {
        beforeEcecution.classList.remove("hide")
        afterEcecution.classList.add("hide")

    }
}
chooseDateIp();
AddDateBtn.addEventListener("click", chooseDateIp);

let updateSection = () => {
    let currentDate = new Date();
    let diffDate = currentDate - dateOfBorth;

    let yer = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365));
    let mon = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365) % 12);
    let dy = Math.floor(diffDate / (1000 * 60 * 60 * 24) % 30);
    let hr = Math.floor(diffDate / (1000 * 60 * 60) % 24);
    let mn = Math.floor(diffDate / (1000 * 60) % 60);
    let seco = Math.floor(diffDate / (1000) % 60);

    yearsEl.innerText = yer;
    monthsEl.innerText = mon;
    daysEl.innerText = dy;
    hoursEl.innerText = hr;
    monthsEl.innerText = mn;
    secoundEl.innerText = seco;
}
updateSection();