'use strict';

// Global Variables
var container = document.getElementById('stores');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var overallTotal = 0;
// var storeArr=[];

// var hourlyObj = new Object();
// for (var i = 0; i < hours.length; i++) {
//   hourlyObj[hours[i]];
// }
// for (var i = 0; i < hours.length; i++) {
//   hourlyObj.key = hours[i];
// }



// Global Random Function
function randomNumCust (min, max, avrg) {
  var randPerCust = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(randPerCust * avrg);
}

// standalone function
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

// CREATING CONSTRUCTOR FOR STORE
function Store (name, minCustomer, maxCustomer, avrgCookieSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avrgCookieSales = avrgCookieSales;
  this.cookiesSold = [];
  this.total = 0;

  // num of Cookies a store has to make a DAY + total
  for (var i = 0; i < 14; i++) {
    this.cookiesSold.push(randomNumCust(this.minCustomer, this.maxCustomer, this.avrgCookieSales))
    this.total += this.cookiesSold[i];
  }
}



// Creates a container
var article = addElement('article', container);

// Creates a table
var tableElem = addElement('table', article);

// Creates a header row
var headerRowElem = addElement('tr', tableElem);

addElement('th', headerRowElem, ' ');

for (var i = 0; i < 14; i++) {
  addElement('th', headerRowElem, hours[i]);
}

addElement('th', headerRowElem, 'Daily Location Total');


// ADD BODY OF TABLE
Store.prototype.render = function(container) {
  var dataRowElem = addElement('tr', tableElem);

  addElement('td', dataRowElem, this.name);

  for (var i = 0; i < 14; i++) {
    addElement('td', dataRowElem, this.cookiesSold[i]);
    // hourlyObj.hours[i].push(this.cookiesSold[i]);
  }
  // console.log('dataRowElem: ', dataRowElem.nth-child(2));
  // document.querySelector("#stores > article > table > tr:nth-child(2) > td:nth-child(2)")
  // ***** This add total as last columm
  addElement('td', dataRowElem, this.total);


}

// console.log(cookiesSold)
var storeContainer = document.getElementById('stores');

var allStores = [];

allStores.push(new Store('Seattle',23,65,6.3));
allStores.push(new Store('Tokyo',3,4,1.2));
// allStores.push(new Store();

// console.log('article td:nth-child(2): ', stores.article.td.nth-child(2))
// var test= document.querySelector("#stores > article > table > tr:nth-child(2) > td:nth-child(2)");
// #stores > article > table > tr:nth-child(2) > td:nth-child(2)
// console.log('test: ', test);
// Total Per Hour


var totalHourArr = [];
var totalPerHour = 0;

// Iterates each row
for(var i = 0; i < allStores.length; i++) {
  var eachStore = allStores[i];
  eachStore.render(storeContainer);
}



// console.log('allStores: ', allStores)
// #stores > article > table > tr:nth-child(2) > td:nth-child(2)
// #stores > article > table > tr:nth-child(3) > td:nth-child(2)

// #stores > article > table > tr:nth-child(2) > td:nth-child(3)
// #stores > article > table > tr:nth-child(3) > td:nth-child(3)

// #stores > article > table > tr:nth-child(2) > td:nth-child(16)

// function hourlyTotal(hrsArr, salesArr) {
//   for (var i = 0; i < hours.length; i++) {
//     hourlyObj[hours[i]];

//   var dictHourlyTotal = []; // create an empty array
//   for(var j = 2; j < 17; j++){
//     dictHourlyTotal.push({
//       key: hours[j],
//       value: document.querySelector("#stores > article > table >tr:nth-child(3)[j]")
//     })
//   }
// }

// // console.log('dictHourlyTotal: ', dictHourlyTotal(hourlyTotal))


// for(var j=2; j<17; j++){
//   console.log('hours[i]: ', this.cookiesSold.nth-child(j));
  
//   // hourlyObj[hours[j]] = this.cookiesSold[j];
// }
  // console.log('eachStore.cookiesSold[i]: ', eachStore.cookiesSold[i])
  // console.log('hourlyObj: ', hourlyObj)
// console.log('hourlyObj: ', hourlyObj)

// CREATING OBJECT FOR EVERY HOUR STORES TOTAL


// sumVal = document.getElementById("val");
// console.log('sumVal: ', sumVal);

// console.log('hourlyObj: ', hourlyObj)

// key = hours
// value = cookiesSold[i]

// *****ADD FOOTER TABLE WITH TOTAL COOKIES OF ALL STORES****************
// FOOTER
// **** Need to change this to iterate to all the totals of each store 
// Creates a footer row
var dataRowElemm2 = addElement('tr', tableElem);

addElement('td', dataRowElemm2, 'Totals');

// NEED TO ADD 15 TOTALS OF COLUMN SUM
for (var i = 0; i < 15; i++) {
  addElement('td', dataRowElemm2, totalPerHour[i]);
}

document.querySelector("#stores > article > table > tr:nth-child(3) > td:nth-child(2)")
document.querySelector("#stores > article > table > tr:nth-child(3) > td:nth-child(2)")