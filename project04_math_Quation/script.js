let scoreEl = document.querySelector("#score")
let quastion = document.querySelector("#quation-p")
let inputBar = document.querySelector("#answer-input")
let inputSection = document.querySelector("#section")
let Button = document.querySelector("#submit-btn")
let score = 0;
let result;

function randomNumMulti() {
    let ranNum01 = Math.floor(Math.random() * 10);
    let ranNum02 = Math.floor(Math.random() * 10);
    quastion.innerHTML = `Q.What is ${ranNum01} multiply by  ${ranNum02} ?`;
    result = ranNum01 * ranNum02;
}

const scoreFun = (event) => {
    event.preventDefault();
    let fromdata = new FormData(inputSection);
    let userdata = +fromdata.get("ans")
    if (result == userdata) {
        score += 2;
        inputBar.style.borderColor = "green"
    }
    else {
        score -= 1;
        inputBar.style.borderColor = "red"
    }
    scoreEl.innerHTML = `Score => ${score}`
    event.target.reset();
    randomNumMulti();
}
