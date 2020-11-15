
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



  console.log('#wrappers node type is a',wrapper.nodeType);
  console.log('#wrappers node name is a',wrapper.nodeName);
  console.log('#wrappers node has a child node',wrapper.hasChildNodes());//returns true or false
  const clonedwrapper = wrapper.cloneNode(true);
  console.log(clonedwrapper);


  console.log('#wrappers parent node is a',wrapper.parentNode);
  console.log('#wrappers parent element is a',wrapper.parentElement);

  console.log('#wrappers child nodes are (with breaks)',wrapper.childNodes);
  console.log('#wrappers child nodes are (without breaks)',wrapper.children);

//sibling elemets -nextsibling - previous sibling
  books =  document.querySelector('#book-list');
console.log('#wrappers parent node is a',books.nextSibling);
console.log('#wrappers parent node is a',books.nextElementSibling);
console.log('#wrappers parent node is a',books.previousSibling);
console.log('#wrappers parent node is a',books.previousElementSibling);

books.previousElementSibling.querySelector('h1').innerHTML += '<br> What a good page dude ;)';


var dlt = document.querySelectorAll('#book-list .delete');
dlt.forEach((function(btn) {
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
}));

var ggl = document.querySelector('#page-banner a');

ggl.addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target.textContent,'was prevented');
})
*/

const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){

      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
      }
});
