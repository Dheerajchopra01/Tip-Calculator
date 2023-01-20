
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople =document.getElementById('numberOfPeople');
const perPersonTotal =document.getElementById('perPersonTotal');

// Get number of people from "number of people div"
let noOfPerson = Number(numberOfPeople.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {

    const billTotal = Number(billTotalInput.value) ;
    const tip =  Number((tipInput.value * billTotalInput.value)/100) ;
    const noOfPeople = Number(numberOfPeople.innerText);

    let totalAmountPerPerson = ( billTotal + tip )/ noOfPeople; 
    perPersonTotal.innerText = `$${totalAmountPerPerson.toFixed(2).toLocaleString('en-US')}`;
}

// ** Increase People Count - Splits the bill between more people **
const increasePeople = () => {

    noOfPerson = noOfPerson+1;
    numberOfPeople.innerText = noOfPerson;
    calculateBill();
}

// ** Decrease People Count - Splits the bill between fewer people **
const decreasePeople = () => {

    if(noOfPerson <= 1){
        return;
    }

    noOfPerson -= 1;
    numberOfPeople.innerText = noOfPerson;
    calculateBill();
}