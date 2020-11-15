
var titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
// we can turn the HTMLCOLLECTION into array , how ?

console.log(Array.isArray(Array.from(titles)));
//we got true.

Array.from(titles).forEach(function(item) {
  console.log(item);
});
