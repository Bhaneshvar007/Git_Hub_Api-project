let calculateEl = document.getElementById("calculateForm");
let result = document.getElementById("resultel");

function calculateMarks(event) {
    event.preventDefault();
    let MaxMarks = 400;
    const fromdata = new FormData(calculateEl);
    const data = {};
    fromdata.forEach((value, key) => {
        data[key] = +value;
    });
    let totalmarks = data.maths + data.Physics + data.Chemistry + data.BioLogy;
    let persentage = ((totalmarks / MaxMarks) * 100).toFixed(2);
    if (persentage <= 35) {
        result.style.color='red'
    }
    else {
        result.style.color='white'
    }
    result.innerHTML = `You have got ${totalmarks} marks out of ${MaxMarks} & Persentage is ${persentage}`
};
