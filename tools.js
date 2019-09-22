//first when a button is clicked the color must change
const list =  document.querySelector('#books, ul');
const buttons = document.querySelectorAll('.button, button');

//
Array.from(buttons).forEach(function(i){
    i.addEventListener('click', function(){
       i.style.color = "black"
      });
  });
  
 let elts = document.querySelectorAll('.button, buttons');
 Array.from(elts).forEach(function(i){ i.addEventListener('click', function(){
     let allvar = i.parentElement;
     let other = allvar.parentElement;
     other.removeChild(allvar);
    })

 });

/* we add book by clicking on the add button
-we prevent a default behavior for this button*/
let adding = document.forms['add'];

adding.addEventListener('submit',function(e){
    e.preventDefault();
    var newBook = adding.querySelector('input[type = "text"]').value;
    console.log(newBook);

    //we create new element to collect the new created element

    const newTitle = document.createElement('li');
    const newName = document.createElement('span');
    const deleter = document.createElement('span');
    const btn = document.createElement('button');

     //append the created element to the DOM

     newTitle.appendChild(newName);
     newTitle.appendChild(deleter);
     list.appendChild(newTitle);
     deleter.appendChild(btn);

     //adding text content to the created element

    btn.textContent = 'Delete';
    newName.textContent = newBook;
      
    //creating new classes to get the right style
    newName.classList.add("title");
    deleter.classList.add("button");

    /*classLiat is a method use to add and remove classes from an HTML document */

})
