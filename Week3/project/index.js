"use strict";

document.querySelector("#title").innerText = "Tip Calculator";

const billAmount = document.querySelector("#bill-amount");
const peopleAmount = document.querySelector("#people-amount");
const serviceRate = document.querySelector("#service");
const calculateButton = document.querySelector("#calulate-button");

function calculateTip(){

    const billAmountValue = billAmount.value;
    const peopleAmountValue = peopleAmount.value;
    const serviceRateIndex = serviceRate.selectedIndex;
    let calculation;

    //check if all fields are not empty
    if (billAmountValue == "" || peopleAmountValue == "" || serviceRateIndex == 0){
        alert("You need to fill in all the fields!");
        return false;
    }

    //check if valid numbers
    if (!isValidNumber(billAmountValue) || !isValidNumber(peopleAmountValue))
        return false;

    //calulation depends on the service rate
    switch (serviceRateIndex) {

        case 1:
            calculation = ((billAmountValue * (30/100)) / peopleAmountValue).toFixed(2);
            break;
    
        case 2:
            calculation = ((billAmountValue * (20/100)) / peopleAmountValue).toFixed(2);
            break;

        case 3:
            calculation = ((billAmountValue * (15/100)) / peopleAmountValue).toFixed(2);
            break;

        case 4:
            calculation = ((billAmountValue *(10/100)) / peopleAmountValue).toFixed(2);
            break;

        case 5:
            calculation = ((billAmountValue * (5/100)) / peopleAmountValue).toFixed(2);
            break;

        default:
            alert("Something went wrong.")
            break;
    }

    document.querySelector("#tip-amount").innerText = `Tip amount \n € ${calculation}`;

    //add "each" for people more than 2
    if (peopleAmountValue > 1)
        document.querySelector("#for-each").innerText = `each`;
    else
        document.querySelector("#for-each").innerText = "";
}

function isValidNumber(value){

    if (value > 0) //check if it is positive number
        return true;

    else{
        alert(`${value} is not a valid number.`)
        return false;
    }   

}

calculateButton.addEventListener("click", calculateTip);


