let quates = document.querySelector(".Quates")
let writer = document.querySelector(".Writer")
let NewQuates = document.querySelector(".NewQuates")

let url = `https://api.quotable.io/random`;

async function quatesFun() {
    let response = await fetch(url);
    let data = await response.json();

    writer.innerHTML = data.author;
    quates.innerHTML = `" ${ data.content } "`;
}

NewQuates.addEventListener("click", quatesFun);