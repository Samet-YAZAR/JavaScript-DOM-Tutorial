
/*
var titles = document.getElementsByClassName('title');


console.log(Array.isArray(titles));
// we can turn the HTMLCOLLECTION into array , how ?

console.log(Array.isArray(Array.from(titles)));
//we got true.

Array.from(titles).forEach(function(item) {
  console.log(item);
});

var books = document.querySelector('#book-list li:nth-child(2) .name');
console.log(books); //tek veri dondurdu

//Morr than 1 item; querySelectorALl();


books =  document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book) {
    book.textContent+= ' (book name)';
});

 wrapper =  document.querySelector('#wrapper');
  //wrapper.innerHTML = '<h1>SADECE  BEN KALDIM</h1>' bunu yoruma alinca += kullaninca sonuna ekleme yaptik.
  wrapper.innerHTML += '<p>NAber</p>'
*/

  wrapper =  document.querySelector('#wrapper');
  console.log('#wrappers node type is a',wrapper.nodeType);
  console.log('#wrappers node name is a',wrapper.nodeName);
  console.log('#wrappers node has a child node',wrapper.hasChildNodes());//returns true or false
  const clonedwrapper = wrapper.cloneNode(true);
  console.log(clonedwrapper);


console.log('#wrappers parent node is a',wrapper.parentNode);
console.log('#wrappers parent element is a',wrapper.parentElement);

console.log('#wrappers child nodes are (with breaks)',wrapper.childNodes);
console.log('#wrappers child nodes are (without breaks)',wrapper.children);
