

// controlador de todo
let selectedKey;
let filmField = document.querySelector('#filmName');
let filmsArea = document.querySelector('#filmsArea');
document.querySelector('#getFilm').addEventListener('click',searchFilm);
document.querySelector('#saveFilm').addEventListener('click',saveFilm);
document.querySelector('#deleteFilm').addEventListener('click',deleteFilm);
filmsArea.addEventListener('click', (event) => {
  let filmCard = event.target.parentElement;
  filmCard.setAttribute('class','border border-primary');
  selectedKey = filmCard.getAttribute("data-key");
  
});

fetch('http://localhost:3000/getAllFilms')

  .then(response => response.json())
  .then(films => {

    films.forEach(val => {
      insertCard(val,'#filmsArea');
    });
    
  })
  .catch((err)=>{
            console.log(err);

  })

function searchFilm(){
  clearArea('#newFilmArea');
  let endPoint = 'http://localhost:3000/getFilm/' + filmField.value ;
  fetch(endPoint)

  .then(response => response.json())
  .then(film => {
      
      insertCard(film,'#newFilmArea')
  })
  .catch((err)=>{
            console.log(err);

  })
}

function saveFilm(){

  let endPoint = 'http://localhost:3000/saveFilm/' + filmField.value ;
  fetch(endPoint)
    .then(response => response.json())
    .then(films => {
      
      clearArea('#newFilmArea');
      clearArea('#filmsArea');
      
      films.forEach(val => {
        insertCard(val,'#filmsArea');
      });
      
    })
    .catch((err)=>{
              console.log(err);
  
    })

    
}

  function deleteFilm(){

    let endPoint = 'http://localhost:3000/deleteFilm/' + selectedKey ;
    clearArea('#filmsArea');
    fetch(endPoint)
    .then(response => response.json())
    .then(films => {
  
      films.forEach(val => {
        insertCard(val,'#filmsArea');
      });
      
    })
    .catch((err)=>{
              console.log(err);
  
    })
    

  }