'use strict';

var container = document.getElementById('stores');

// Object for Seattle
var seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avrgCookie: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesSold: [],
  total: 0,
}

function randomNumCust (min, max, avrg) {
  var randPerCust = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(randPerCust * avrg);
}

// Random Function
var ranTest = randomNumCust(seattle.minCust,seattle.maxCust, seattle.avrgCookie);
console.log('random ave: ', ranTest);

// num of Cookies each store has to make a DAY + total
for (var i = 0; i < 14; i++) {
  seattle.cookiesSold.push(randomNumCust(seattle.minCust,seattle.maxCust, seattle.avrgCookie))
  seattle.total += seattle.cookiesSold[i];
}

// Created an Object with hours and cookies sold
var listCookies = new Object();
var currentKey;
var currentVal;

for (var i = 0; i < 14; i++) {
  currentKey = seattle.hours[i];
  currentVal = seattle.cookiesSold[i];
  listCookies[currentKey] = currentVal;    
}

console.log('listCookies: ', listCookies)
console.log('cookiesSold: ',seattle.cookiesSold);
console.log('total: ',seattle.total);

// Start DOM
var parentElement = document.getElementById('stores');

var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

// for (var i = 0; i < seattle.cookiesSold.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = seattle.cookiesSold[i];
//   ul.appendChild(li);
// }

for (var key in listCookies) {
    var li = document.createElement('li');
    li.textContent = key + ': ' + listCookies[key] + ' cookies';
    ul.appendChild(li);
  }

var li = document.createElement('li');
  li.textContent = 'Total: ' + seattle.total + ' cookies';
  ul.appendChild(li);