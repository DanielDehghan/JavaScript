

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {

addBookList(book){

const list = document.querySelector('#book-list');
const row = document.createElement('tr');
row.innerHTML = `

<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="" class="delete">X</a></td>


`;

list.appendChild(row);
}

showAlert(message, className){

    const div = document.createElement('div');

    //Add className
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');


    //Get Form
    const form = document.querySelector('#book-form');


    //Insert Alert
    container.insertBefore(div, form);

    //timeout adter 3 sec

    setTimeout(() => {
        
        document.querySelector('.alert').remove();
    }, 3000);
}

deleteBook(target){

    if(target.className === 'delete'){
        target.parentelement.parentelement.remove();
    }
}

clearFields(){
    document.getElementById('title').value= '';
    document.getElementById('author').value= '';
    document.getElementById('isbn').value= '';
}



}

// EVent Listening
document.getElementById('book-form').addEventListener('submit', (e)=> {


    //Get Form values 
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;


    // Instantiate the book class object
    const book = new Book (title, author, isbn);

    // Instantiate the UI class object
    const ui = new UI();


    //Validation
    if(title == ''||author == ''||isbn == ''){

        // Error alert

        ui.showAlert('Please fill in all fields', 'error')
    }
    else{

     // Add Book to List
     ui.addBookList(book);


     // Show Success Alert 
     ui.showAlert('Book Added', 'success');

     // Clear Fields 

     ui.clearFields();

    }

    // this will prevent the event listener to do do the default behavior
    // which is submitting
    e.preventDefault();


});


//Event listening for delete

//here we going to use the parent of it i.e 

document.getElementById('book-list').addEventListener('click', function(e){


    // console.log(123); 
    
    
    //Instantiate UL
    const ui = new UI();
    // Delete Book
    ui.deleteBook(e.target);
    
    //Show message
    
    ui.showAlert('Book Removed!', 'success');
    
    
    e.preventDefault();
    });
    