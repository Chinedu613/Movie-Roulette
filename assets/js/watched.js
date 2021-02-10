 // array that holds the movies saved in local storage
 var movieArr = [];

 // assignment variables
 var movieTitle = document.querySelector('#movieTitle');
 var movieDescript = document.querySelector('#descrip');
 var movieTrailer = document.querySelector('#movieTrailer');
 var savedTrailer = document.createElement('iframe');
 var myRating = document.querySelector('#myRating');
 var myNotes = document.querySelector('#myNotes');

// will load the saved movies when user goes to their movies page
$('document').ready(function() {
    
    var savedSidebar = document.querySelector('#savedBar');
    
    // for loop that loops through local storage and pushes movies to an array
    for (var i = 0; i < localStorage.length; ++i ) {

        movies = JSON.parse(localStorage.getItem(localStorage.key(i)));
        movieArr.push(movies);

    };

    // function that appends the movies in local storage to list of saved movies
    movieArr.forEach(function(film) {
        // variables creating elements
        var savedMovies = document.createElement('section');
        var savedTitle = document.createElement('h4');

        // appends movie names to list of saved movies
        savedSidebar.append(savedMovies);
        savedMovies.append(savedTitle);
        savedMovies.classList.add('userMovies')
        savedTitle.textContent = film.name;

    });

});

$(document).on('click', '.userMovies', function() {

    var name = $(this)[0].innerText

    var movieInfo = JSON.parse(localStorage.getItem(name));
    console.log(movieInfo);
    savedTrailer.setAttribute('src', movieInfo.trailerUrl)

    movieTitle.textContent = name;
    movieDescript.textContent = movieInfo.description;
    movieTrailer.appendChild(savedTrailer);
    myRating.textContent = movieInfo.userRating;
    myNotes.textContent = movieInfo.notes;
    
})