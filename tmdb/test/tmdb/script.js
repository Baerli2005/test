window.onload = function() {
    //const url = 'https://api.themoviedb.org/3/movie/76341?api_key=c5dd1166b8fea2eab352e5822a290868&language=de'
    //const url2 = 'https://api.themoviedb.org/3/search/movie?api_key=c5dd1166b8fea2eab352e5822a290868&language=de&query=harry potter';
    //const url3 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c5dd1166b8fea2eab352e5822a290868&language=de';
    //const url4 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c5dd1166b8fea2eab352e5822a290868&language=de';

    const div = document.querySelector('.slider');
    const input = document.querySelector('#search');
    const button = document.querySelector('.btn-search');

    button.addEventListener('click', function() {
        const search = input.value;
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=c5dd1166b8fea2eab352e5822a290868&language=de&query=' + search;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                while(div.firstChild)
                {
                    div.removeChild(div.firstChild);
                }
                data.results.forEach(function(movie) {
                    searchMovies(movie);
                });
            });
    });


    

    getMovies();

    function getMovies()
    {
        const movieurl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c5dd1166b8fea2eab352e5822a290868&language=de&region=AT';
        fetch(movieurl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.results.forEach(movie => {
                    searchMovies(movie);
                });
            })

        //div.appendChild(document.createElement());
    }

    function searchMovies(movie)
    {
        if(movie.poster_path != null)
        {
            const image = createImage(movie.id, movie.poster_path);
            div.appendChild(image);
            image.style.cursor = 'pointer';
            image.addEventListener('click', () => {
                sendMovie(movie.id);
            });
        }
    }

    function sendMovie(id)
    {
        window.open('movie.html?id=' + id, '_blank');
    }

    function createImage(id, path)
    {
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + path;
        img.id = id;
        return img;
    }
}