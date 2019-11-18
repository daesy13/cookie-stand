'use strict';

// Global Variables
// allStores.all = [];
var container = document.getElementById('stores');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Global Random Function
function randomNumCust (min, max, avrg) {
  var randPerCust = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(randPerCust * avrg);
}

// CREATE AN ELEMENT TO SHOW IN HTML
function addElement(tag, prevTag, text) {
  var element = document.createElement(tag);
  prevTag.appendChild(element);
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
  this.calculateAverageCookiesSold();
  // Store.all.push(this);
}

// CREATING PROTOTYPE
Store.prototype.calculateAverageCookiesSold = function() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookiesSold = randomNumCust(this.minCustomer, this.maxCustomer, this.avrgCookieSales);
    this.cookiesSold.push(hourlyCookiesSold);
    this.total += hourlyCookiesSold;
  }
}


// Creates a container
var article = addElement('article', container);
var tableElem = addElement('table', article);
// Creates a table


// Creates a header row
var makeHeaderRow = function(){
  
  
  var headerRowElem = addElement('tr', tableElem);
  addElement('th', headerRowElem, ' ');

  for (var i = 0; i < hours.length; i++) {
    addElement('th', headerRowElem, hours[i]);
  }

  addElement('th', headerRowElem, 'Daily Location Total');
}

makeHeaderRow();

// ADD BODY OF TABLE
Store.prototype.render = function() {
  var dataRowElem = addElement('tr', tableElem);
  addElement('td', dataRowElem, this.name);

  for (var i = 0; i < hours.length; i++) {
    addElement('td', dataRowElem, this.cookiesSold[i]);
  }

  addElement('td', dataRowElem, this.total);
}

var allStores = [];

allStores.push(new Store('Seattle',23,65,6.3));
allStores.push(new Store('Tokyo',3,24,1.2));

// var totalHourArr = [];
// var totalPerHour = 0;

// Iterates each row
for(var i = 0; i < allStores.length; i++) {
  var eachStore = allStores[i];
  eachStore.render();
}

// ADD THIS LATER AND COMMENT THE SAME FUNC INSIDE ADDFOOTERROW
// var tfood
// var footerRow = addElement('tr', tableElem);

function addFooterRow(){
  // Create tr for the footer
  // create td elements 14 time slotos plus mega-total 
  var footerRow = addElement('tr', tableElem);
  addElement('td', footerRow, 'TOTAL');

  var megaTotal = 0;
  for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    var td = document.createElement('td');
    footerRow.appendChild(td);
    var timeSlotTotal = 0;
    for (var storeIndex = 0; storeIndex < allStores.length; storeIndex++) {
      var CurrentStore = allStores[storeIndex]
      timeSlotTotal += CurrentStore.cookiesSold[hourIndex];
    }
    td.textContent = timeSlotTotal;
    megaTotal += timeSlotTotal;
  }

  addElement('td', footerRow, megaTotal);
}

addFooterRow();

// *************ADDING NEW STORE******************
var form = document.getElementById('new-store');
// Store (name, minCustomer, maxCustomer, avrgCookieSales)
Store.prototype.render = function() {
  var tbody = document.getElementById('stores')
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
// handle the updated footer row!!!
// add this unde newSotre.render -> footerRow.innerHTML = "";

function submitHandler(event) {
  event.preventDefault();
  var newStore = new Store(event.target.storeName.value, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseInt(event.target.avrCookies.value));
  console.log('newStore: ', newStore)
  // console.log('event.target.storeName.value: ', event.target.storeName.value);
  // console.log('event.target.minCust.value: ', event.target.minCust.value);
  // console.log('event.target.maxCust.value: ', event.target.maxCust.value);
  // console.log('event.target.avrCookies.value: ', event.target.avrCookies.value);
  
  newStore.render();
  allStores.push(newStore);
  event.target.reset();
  console.log('newStore: ',newStore )
}


console.log('allStores: ',allStores )
form.addEventListener('submit', submitHandler);


// *************END EVENT HANDLER******************


// ***************INVOKE FUNCTION*********************


