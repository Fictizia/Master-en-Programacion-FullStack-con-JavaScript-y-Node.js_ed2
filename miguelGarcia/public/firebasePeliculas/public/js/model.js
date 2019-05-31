
const fetch = require('node-fetch');
const firebase = require('firebase');
let omdbKey = "dcd63e1e";
let omdbApiUrl = `http://www.omdbapi.com/?apikey=${omdbKey}`;
const config = {
    apiKey: "AIzaSyAw_zg3_NZO4VEXDZYMLypf9PM3I3RSVXo",
    authDomain: "myfirebase-magg.firebaseapp.com",
    databaseURL: "https://myfirebase-magg.firebaseio.com",
    projectId: "myfirebase-magg",
    storageBucket: "myfirebase-magg.appspot.com",
    messagingSenderId: "432197009292"
    };
    
firebase.initializeApp(config);
let ref = firebase.database().ref('peliculas');


module.exports = {

    //comprobar pelicula

    getAllFilms: function (){
        
        return new Promise(function(resolve){
            let allFilms = [];
            
            ref.orderByChild('imdbRating').once("value", snapshot => {

                let snapData = snapshot.val();
                for (let film in snapData){
                    allFilms.push(snapData[film]);
                }
                resolve(allFilms);  
            })  
          });
    },

    searchOmdbFilm: function (filmName){
        
        return fetch(`${omdbApiUrl}&t=${filmName}`)
        .then(response => response.json())
        .then(film => film)

        .catch((err)=>{
            console.log(err);
            return err;

        })
        
    },

    searchFireFilm: function (filmName){
        return 'buscando la peli en nuestra base de datos fire' ;
        //return filmObject o false
    },

    loadFilm: function (filmObject){
       
        let filmKey = ref.push().key;
        filmObject.key = filmKey;
        ref.child(filmKey).set(filmObject);
        return this.getAllFilms()
        
    },

    deleteFilm: function (filmKey){
        ref.child(filmKey).remove();
        return this.getAllFilms()

    }


}
