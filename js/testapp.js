'use strict';

// Global Variables
var container = document.getElementById('stores');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var article = addElement('article', container); // Creates a container
var tableElem = addElement('table', article); // Creates a table
var allStores = [];
var form = document.getElementById('new-store'); // ADDING NEW STORE

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

// Creates a header row
var makeHeaderRow = function(){
  var headerRowElem = addElement('tr', tableElem);
  addElement('th', headerRowElem, ' ');
  for (var i = 0; i < hours.length; i++) {
    addElement('th', headerRowElem, hours[i]);
  }
  addElement('th', headerRowElem, 'Daily Location Total');
}

// ADD BODY OF TABLE
Store.prototype.render = function() {
  var dataRowElem = addElement('tr', tableElem);
  addElement('td', dataRowElem, this.name);
  for (var i = 0; i < hours.length; i++) {
    addElement('td', dataRowElem, this.cookiesSold[i]);
  }
  addElement('td', dataRowElem, this.total);
}

// Adds Store into new row
function addStoreToTable (){
  for(var i = 0; i < allStores.length; i++) {
    var eachStore = allStores[i];
    eachStore.render();
  }
};

// Adds a footerRow
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

// *************EVENT HANDLER******************
// handle the updated footer row!!!
// add this unde newSotre.render -> footerRow.innerHTML = "";

function submitHandler(event) {
  event.preventDefault();
  var newStore = new Store(event.target.storeName.value, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseInt(event.target.avrCookies.value));
  tableElem.deleteRow(-1);
  newStore.render();
  allStores.push(newStore);
  event.target.reset();
  console.log('newStore: ',newStore )
  addFooterRow()
}

// !!!!!!it will run submitHandler function when submit happens on whatever the form variable is!!!!!!
form.addEventListener('submit', submitHandler);

// ***************INVOKE FUNCTION*********************
makeHeaderRow();
allStores.push(new Store('Seattle',23,65,6.3));
allStores.push(new Store('Tokyo',3,24,1.2));
allStores.push(new Store('Dubai', 11,	38,	3.7));
allStores.push(new Store('Paris',	20,	38,	2.3));
allStores.push(new Store('Lima', 2,	16,	4.6));
addStoreToTable();
addFooterRow();