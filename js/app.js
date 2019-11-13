'use strict';

// Global Variables
var container = document.getElementById('stores');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var total = 0;
var cookiesSold = [];

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

// CREATING PROTOTYPE FOR STORE
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

  var article = addElement('article', container);

  // add table
  var tableElem = addElement('table', article);

  // add header
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
  }
  
  // ***** This add total as last columm
  addElement('td', dataRowElem, this.total);

}

// *****ADD FOOTER TABLE WITH TOTAL COOKIES OF ALL STORES****************

var storeContainer = document.getElementById('stores');

var allStores = [];

allStores.push(new Store('Seattle',23,65,6.3));
allStores.push(new Store('Tokyo',3,4,1.2));
// allStores.push(new Store();

for(var i = 0; i < allStores.length; i++) {
  var eachStore = allStores[i];
  eachStore.render(storeContainer);
}



// FOOTER
// **** Need to change this to iterate to all the totals of each store 


addElement('td', dataRowElem, this.total);
allStores.push(new Store('Total', 23,	65,	6.3));

// // ******SEATTLE******
// // *******************
// // Object for Seattle
// var seattle = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avrgCookie: 6.3,
//   // hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   cookiesSold: [],
//   total: 0,
// }



// // ******Start DOM******
// var parentElement = document.getElementById('stores');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = seattle.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < hours.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hours[i]}: ${seattle.cookiesSold[i]} cookies` ;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
//   li.textContent = `Total: ${seattle.total} cookies`;
//   ul.appendChild(li);


// // ******TOKYO******
// // *******************
// // Object for Tokyo
// var tokyo = {
//   name: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avrgCookie: 1.2,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   cookiesSold: [],
//   total: 0,
// }

// // num of Cookies Tokyo store has to make a DAY + total
// for (var i = 0; i < 14; i++) {
//   tokyo.cookiesSold.push(randomNumCust(tokyo.minCust, tokyo.maxCust, tokyo.avrgCookie))
//   tokyo.total += tokyo.cookiesSold[i];
// }

// // ******Start DOM******
// var parentElement = document.getElementById('stores');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = tokyo.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < tokyo.hours.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${tokyo.hours[i]}: ${tokyo.cookiesSold[i]} cookies` ;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
//   li.textContent = `Total: ${tokyo.total} cookies`;
//   ul.appendChild(li);


// // ******DUBAI******
// // *******************
// // Object for Dubai
// var dubai = {
//   name: "Dubai",
//   minCust: 11,
//   maxCust: 38,
//   avrgCookie: 3.7,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   cookiesSold: [],
//   total: 0,
// }

// // num of Cookies Dubai store has to make a DAY + total
// for (var i = 0; i < 14; i++) {
//   dubai.cookiesSold.push(randomNumCust(dubai.minCust, dubai.maxCust, dubai.avrgCookie))
//   dubai.total += dubai.cookiesSold[i];
// }

// // ******Start DOM******
// var parentElement = document.getElementById('stores');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = dubai.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < dubai.hours.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${dubai.hours[i]}: ${dubai.cookiesSold[i]} cookies` ;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
//   li.textContent = `Total: ${dubai.total} cookies`;
//   ul.appendChild(li);



// // ******PARIS******
// // *******************
// // Object for Paris
// var paris = {
//   name: "Paris",
//   minCust: 20,
//   maxCust: 38,
//   avrgCookie: 2.3,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   cookiesSold: [],
//   total: 0,
// }

// // num of Cookies Paris store has to make a DAY + total
// for (var i = 0; i < 14; i++) {
//   paris.cookiesSold.push(randomNumCust(paris.minCust,paris.maxCust, paris.avrgCookie))
//   paris.total += paris.cookiesSold[i];
// }

// // ******Start DOM******
// var parentElement = document.getElementById('stores');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = paris.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < paris.hours.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${paris.hours[i]}: ${paris.cookiesSold[i]} cookies` ;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
//   li.textContent = `Total: ${paris.total} cookies`;
//   ul.appendChild(li);


// // ******LIMA******
// // *******************
// // Object for Lima
// var lima = {
//   name: "Lima",
//   minCust: 2,
//   maxCust: 16,
//   avrgCookie: 4.6,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   cookiesSold: [],
//   total: 0,
// }

// // num of Cookies Lima store has to make a DAY + total
// for (var i = 0; i < 14; i++) {
//   lima.cookiesSold.push(randomNumCust(lima.minCust,lima.maxCust, lima.avrgCookie))
//   lima.total += lima.cookiesSold[i];
// }

// // ******Start DOM******
// var parentElement = document.getElementById('stores');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = lima.name;
// article.appendChild(h2);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < lima.hours.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${lima.hours[i]}: ${lima.cookiesSold[i]} cookies` ;
//   ul.appendChild(li);
// }

// var li = document.createElement('li');
//   li.textContent = `Total: ${lima.total} cookies`;
//   ul.appendChild(li);