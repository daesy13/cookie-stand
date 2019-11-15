'use strict';
// ***********TO DO*****************
//  [ ] locations with addresses,
//  [ ] hours open
//  [ ] contact information
//  [ ] Anything else you feel neccesary.

// **************FORMS TO DO LIST*********************
// [ ] Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.
// [ ] Upon sumbission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.
// [ ] Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).
// [ ] If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.
// [ ] Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.
// [ ] Validate your html through HTML5 validation.
// [ ] Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.

// Global Variables
var container = document.getElementById('stores');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Global Random Function
function randomNumCust (min, max, avrg) {
  var randPerCust = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(randPerCust * avrg);
}

// Standalone function
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
  // this.location = location;
  // this.phone = phone;
  // this.startHour = startHour;
  // this.endHour = endHour;

  // num of Cookies a store has to make a DAY + total
  for (var i = 0; i < hours.length; i++) {
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
  
  // ***** This add total as last columm
  addElement('td', dataRowElem, this.total);

}

var storeContainer = document.getElementById('stores');

var allStores = [];

// UPLOADING EACH STORE
allStores.push(new Store('Seattle',23,65,6.3));
allStores.push(new Store('Tokyo',3,4,1.2));
allStores.push(new Store('Dubai', 11,	38,	3.7));
allStores.push(new Store('Paris',	20,	38,	2.3));
allStores.push(new Store('Lima', 2,	16,	4.6));


// Iterating and rendering each store
for(var i = 0; i < allStores.length; i++) {
  var eachStore = allStores[i];
  eachStore.render(storeContainer);
}

// *****ADD FOOTER TABLE WITH TOTAL COOKIES OF ALL STORES****************
// FOOTER
// **** Need to change this to iterate to all the totals of each store 
// Creates a footer row
var dataRowElemm2 = addElement('tr', tableElem);

addElement('td', dataRowElemm2, 'Totals');

// NEED TO ADD 15 TOTALS OF COLUMN SUM the dollar sign is a place holder
for (var i = 0; i < 15; i++) {
  addElement('td', dataRowElemm2, '$');
}


// *************ADDING NEW STORE******************

var form = document.getElementById('new-store');
// Store (name, minCustomer, maxCustomer, avrgCookieSales)
Store.prototype.render = function() {
  var tbody = document.getElementById('store-entries')
  var row = document.createElement('tr');
  tbody.appendChild(row);

  var nameTD = document.createElement('td');
  row.appendChild(nameTD);
  nameTD.textContent = this.name;

  var salesTD = document.createElement('td');
  row.appendChild(salesTD);
  salesTD.textContent = this.cookiesSold;
}
// *************END ADDING NEW STORE******************


// *************EVENT HANDLER******************

function submitHandler(event) {
  event.preventDefault();
  var newStore = new Store(event.target.storeName.value, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseInt(event.target.avrCookies.value));
  console.log('newStore: ', newStore)
  event.target.reset();

  newStore.render();
}

console.log('event.target.storeName.value: ', event.target.storeName.value);
console.log('event.target.minCust.value: ', event.target.minCust.value);
console.log('event.target.maxCust.value: ', event.target.maxCust.value);
console.log('event.target.avrCookies.value: ', event.target.avrCookies.value);



form.addEventListener('submit', submitHandler);

// *************END EVENT HANDLER******************