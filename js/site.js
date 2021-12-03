//get the values from the page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //validate input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = fizzBuzz(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter numbers");
    }
}

//generate numbers from the startvalue to the endvalue
//logic function
function fizzBuzz(startValue, endValue) {

    let numbers = [];

    for(let i = startValue; i <= endValue; i++) {

        if(i % 15 == 0) {
            
            numbers.push("FizzBuzz");
        
        } else if(i % 3 == 0) {

            numbers.push("Fizz");

        } else if(i % 5 == 0) {

            numbers.push("Buzz");

        } else {
            
            numbers.push(i);
        }
        
    }

    return numbers;
}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(numbers) {
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "";
        let number = numbers[index];

        if(number == "Fizz" || number == "Buzz" || number == "FizzBuzz") {
            
            className = "fizzBuzz";

        } else {

            className = "notFizzBuzz";

        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}

