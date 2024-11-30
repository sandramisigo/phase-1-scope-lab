// Write your solution in this file!
var customerName = 'bob' 

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
    console.log(customerName.toUpperCase());

    //setting bestCustomer to 'not bob'
var bestCustomer;
var customerName ='bob';

function setBestCustomer(){
  bestCustomer = 'not bob';
}


//overwriteBestCustomer to equal maybe customer
 var newbestCustomer;
function overwriteBestCustomer(newBestCustomer){
    bestCustomer = 'maybe bob';
}


const leastFavoriteCustomer = 'june';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'mitchelle';
    console.log(leastFavoriteCustomer) 
}
console.log(changeLeastFavoriteCustomer())
