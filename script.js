function calculate() {
    let filter = document.getElementById("filter");
    let reduce = document.getElementById("reduce");
    let array = document.getElementById("input").value;
    let answer = [];
    array = array.split(",");
    array = array.map(element => Number.isInteger(parseInt(element)) ? parseInt(element) : error());
    console.log(array);
    console.log("calculating")
    if (filter.checked) {
        console.log("filter,", filter.checked);
        answer = array.filter(num => (num % 2) == 0)
    } 
    if (reduce.checked) {
        console.log("reduce, ", reduce.checked);
        console.log(array);
        answer = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        console.log(answer);
    }
    document.getElementById("result").value = answer;
}

function error() {
    document.getElementById("input").value = "";
    alert("invalid input");
    return;
}