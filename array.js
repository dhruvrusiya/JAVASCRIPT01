//write a programme to find out all factor of a numbers of array of number
//note - input must be taken from html input tag

function displayArray(){
    const input = document.getElementById("arrayInput").value; // Get input value
    const array = input.split(",").map(item => item.trim());   // Split and trim elements
    document.getElementById("output").innerHTML = `Array: [${array.join(", ")}]`;

}