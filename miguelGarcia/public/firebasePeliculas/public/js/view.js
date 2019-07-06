


function insertCard(film,area){

let filmsArea = document.querySelector(area);

let filmCard = document.createElement('div');
filmCard.setAttribute('class','col-6 my-4 ');

if (!film.Error){
    
    var content = 

    `<div data-key=${film.key} class="card" style="width: 26rem;">
        <img src="${film.Poster}" class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">${film.Title}</h5>
            <p class="card-text">
            Year:${film.Year}
            Director:${film.Director}
            Actors:${film.Actors}
            Awards:${film.Awards}
            Writer:${film.Writer}
            Production:${film.Production}
            </p>
            <a href="${film.Website}" class="card-link">website</a>

        </div>
        <div class="card-footer text-muted">
            <h5>IMDB rating: ${film.imdbRating} </h5>
        </div>
    </div>`;
}

else {
    
    var content = `<div><h5>${film.Error}</h5></div>`;
}
    filmCard.innerHTML = content;
    filmsArea.appendChild(filmCard);

}

function clearArea(area){
    let filmsArea = document.querySelector(area);
    filmsArea.innerHTML = '';

}
