


function showBooks () {
    
    fetch('http://api.nytimes.com/svc/books/v3/lists/2017-02-01/hardcover-fiction.json?api-key=05da1e5d09624d9492476f49bb1fe7a5&list=hardcover-fiction')
    .then((response) => {
        return response.json()
    })
    .then((books) => {
        renderTodos(books);

    })
}
function renderBook(value,index){
    const main = document.querySelector('#main');
    const div = document.createElement('div');
    salto = document.createElement('br');
    div.setAttribute('class', 'book-container');
    main.appendChild(div);
    order = document.createTextNode('#' + (index + 1) + ' ');
    div.appendChild(order);
    titulo = document.createTextNode(value.title);
    div.appendChild(titulo);
    portada = document.createElement('img');
    urlImg = value.book_image;
    portada.setAttribute('src',urlImg);
    portada.setAttribute('class','imagen');
    div.appendChild(portada);
    weeks = document.createTextNode('Weeks on list: ' + value.weeks_on_list);
    div.appendChild(weeks);
    div.appendChild(salto);
    description = document.createTextNode(value.description);
    div.appendChild(description);

}





showBooks();

function renderTodos(books){ books.results.books.forEach(renderBook);}

    









