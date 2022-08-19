


// Increase Item with function 
function increaseItem(increase){
    const prevItem = document.getElementById(increase);
    const prevItemString = prevItem.value;
    const prevItemInNumber = parseInt(prevItemString);
    const newIncreaseItem = prevItemInNumber + 1;
    prevItem.value = newIncreaseItem;
    return newIncreaseItem;
}

// Decrease Item with function

function decreaseItem(decrease) {
    const prevItem = document.getElementById(decrease);
    const prevItemString = prevItem.value;
    const prevItemInNumber = parseInt(prevItemString);
    const newDecreaseItem = prevItemInNumber - 1;
    if (newDecreaseItem < 0) {
        return 0;
    }
    prevItem.value = newDecreaseItem;
    return newDecreaseItem
}



/*
// Update Item with function 
function updateItem(update){
    const prevItem = document.getElementById('iPhone-input-value');
    const prevItemString = prevItem.value;
    const prevItemInNumber = parseInt(prevItemString);

    let newUpdateItem;
    if (update === true) {
        newUpdateItem = prevItemInNumber + 1
    }
    else {
        newUpdateItem = prevItemInNumber - 1
    }
    prevItem.value = newUpdateItem;
}
*/
//Price Calculation and Set Price
function priceCalculation(items, price, setPrice){
    const newItemsPrice = items * price;
    const setIphonePrice = document.getElementById(setPrice);
    setIphonePrice.innerText = newItemsPrice;
}

// Get Element for Total price Calulation
function getElementForTotal (elem) {
    const getElement = document.getElementById(elem);
    const getElementText = getElement.innerText;
    const getElementNumber = parseFloat(getElementText);
    return getElementNumber;
}

//Sub Total Calculatio
function subTotalCalculation () {
    const iphoneTotal = getElementForTotal('iphone-price');
    const caseTotal = getElementForTotal('case-price');
    const subTotal = iphoneTotal + caseTotal;
    //Get and Set Sub Total Element
    const getSubtotalElement = document.getElementById('sub-total');
    getSubtotalElement.innerText = subTotal;

    //Tax Calculation And set
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const taxElement = document.getElementById('tax-amount');
    taxElement.innerText = tax
    //Final Total Calculation And set
    const finalTotal = subTotal + tax;
    const finalElement = document.getElementById('final-total');
    finalElement.innerText = finalTotal
}

//Increase iPhone Item
document.getElementById('plus-btn-iPhone').addEventListener('click', function(){
    const iphoneItems = increaseItem('iPhone-input-value');
    priceCalculation(iphoneItems, 1219, 'iphone-price');

    subTotalCalculation ();
});

// Decrease iphone item

document.getElementById('minus-btn-iPhone').addEventListener('click', function(){
    const iphoneDecreaseItems = decreaseItem('iPhone-input-value');
    priceCalculation(iphoneDecreaseItems, 1219, 'iphone-price');

    subTotalCalculation ();
});

//Increase Case Item
document.getElementById('plus-btn-case').addEventListener('click', function(){
    const caseItems = increaseItem('case-input-value');
    priceCalculation(caseItems, 59, 'case-price');

    subTotalCalculation ()
});

//Decrease Case Item
document.getElementById('minus-btn-case').addEventListener('click', function(){
    const caseDecreaseItems = decreaseItem('case-input-value');
    priceCalculation(caseDecreaseItems, 59, 'case-price');

    subTotalCalculation ();
});



//Remove Item





