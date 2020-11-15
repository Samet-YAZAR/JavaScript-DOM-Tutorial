
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

var book = document.querySelector('#book-list li:nth-child(2) .name');

console.log(book.hasAttribute('class'));
console.log(book.getAttribute('class'));
console.log(book.setAttribute('class','surname'));
console.log(book.getAttribute('class'));
console.log(book.setAttribute('class','name'));
console.log(book.getAttribute('class'));
console.log(book.hasAttribute('href'));
console.log(book.removeAttribute('class'));
console.log(book.getAttribute('class'));
book.setAttribute('class','name');
console.log(book.getAttribute('class'));
*/

const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){

      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
      }
});


const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
  e.preventDefault();
  //if(e.target.class)
// e.querySelector('') kulalndik asagida, formu butun olarak ele aliyorz demedik mi ?
  const val = addForm.querySelector('input[type="text"]').value;
  //createElement
  const li =document.createElement('li');
  const name =document.createElement('span');
  const dlt =document.createElement('span');

  //add textContent
  name.textContent = val;
  dlt.textContent = 'delete';

  name.classList.add('name');
  dlt.classList.add('delete');

  //nested

  li.appendChild(name);
  li.appendChild(dlt);
  list.appendChild(li);
});

const chckBox = document.querySelector('#hide');

chckBox.addEventListener('change',function(){
    if(chckBox.checked){
      list.style.display= "none";
    }else {
      list.style.display= 'block';
    }
});

// const term = document.querySelector('#search-books input[type="text"]').value;
// console.log(term);

//bunun bir form oldugunu unutup, ustteki gibi yazmaya calstik.

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(book){
    const term= book.target.value.toLowerCase();
    //inputlar uzerinde dolasyoruz. Ondan dolayi value almamiz gerekiyr.
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!= -1) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
    });



});
