console.log('sanity check!')

//get by id
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

//get by tag
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

//lists all li in an array
var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

//lists all li individually
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

// get by class
var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

//querySelector MUST use # or .
var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

//querySelectorAll
var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

//traversing the DOM with child, parent, sibling
  var childNodes = document.body.childNodes
  console.log(childNodes);

//altering the content
for (var i=0; i<allListItems.length; i++) {
  console.log(allListItems[i].innerText);
};

for (var i=0; i<allListItems.length; i++) {
  console.log(allListItems[i].innerText=i);
}
console.log(allListItems);


//Manipulation
document.getElementById('main').style.backgroundColor = 'goldenrod';

var propertyTest = document.getElementById('main')
console.log(propertyTest);

//createElement
var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = 'another list item';
console.log(newElement);
console.log(li);

getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = 'prepend';
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);
