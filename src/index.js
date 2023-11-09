// Your code here
const url = 'http://localhost:3000/films'

//see first movie details: poster, title, runtime, showtime, available tickets when page loads
//number of available tickets is subtracting number of tickets_sold from capacity

fetch(`${url}/1`)
.then(res => res.json())
.then(displayFirstMovie)

fetch(url)
.then(res => res.json())
.then(displayAllMovies)

const moviePoster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const runtime = document.getElementById('runtime')
const description = document.getElementById('film-info')
const showtime = document.getElementById('showtime')
const availableTickets = document.getElementById('ticket-num')

function displayFirstMovie(movie){
    moviePoster.src = movie.poster
    movieTitle.textContent = movie.title
    runtime.textContent = movie.runtime
    description.textContent = movie.description
    showtime.textContent = movie.showtime
    availableTickets.textContent = (movie.capacity - movie["tickets_sold"])

    const buyTicketButton = document.querySelector('#buy-ticket')
    buyTicketButton.addEventListener('click', decreaseTickets)
}

function decreaseTickets(){
    let buyTicketButton = document.querySelector('#buy-ticket')
    // const movieTitle = document.querySelector('.film item')
    buyTicketButton.textContent = "Buy ticket"
        if (availableTickets.textContent > 0) {
        availableTickets.textContent-=1
        } else {
            alert('This movie is sold out!')
            buyTicketButton.textContent = "Sold out"
            // movieTitle.className.add('sold-out')
        }
    }

const movieList = document.querySelector('#films')
function displayAllMovies(movie){
    movieList.textContent = ''
    movie.forEach(addMovieTitle)
}

function addMovieTitle(movie){
    const newMovie = document.createElement('li')
    newMovie.classList += 'film item'
    newMovie.textContent = movie.title
    movieList.append(newMovie)

    // newMovie.addEventListener('click', (movie) => {displayMovies(movie)})
}

// function displayMovies(movie){
//     console.log(movie)
// }