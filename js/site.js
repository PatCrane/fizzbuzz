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
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter numbers");
    }
}

//generate numbers from the startvalue to the endvalue
//logic function
function generateNumbers(startValue, endValue) {

    let numbers = [];

    for(let i = startValue; i <= endValue; i++) {

        //this will execute in a loop until index = endValue
        numbers.push(i);
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

        if(number % 2 == 0) {
            
            className = "even";

        } else {

            className = "odd";

        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}

