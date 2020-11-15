
// var titles = document.getElementsByClassName('title');
//
//
// console.log(Array.isArray(titles));
// // we can turn the HTMLCOLLECTION into array , how ?
//
// console.log(Array.isArray(Array.from(titles)));
// //we got true.
//
// Array.from(titles).forEach(function(item) {
//   console.log(item);
// });

var books = document.querySelector('#book-list li:nth-child(2) .name');
console.log(books); //tek veri dondurdu

//Morr than 1 item; querySelectorALl();

books =  document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(i) {
    console.log(i);
});
