window.onload = function() {
    console.log(new URLSearchParams(window.location.search).get('id'));
    const movieID = new URLSearchParams(window.location.search).get('id');
    //console.log(window.location.search);
    const title = document.querySelector('.title');
    const handlung = document.querySelector('.handlung');
    const picture = document.querySelector('.picture');
    const container = document.querySelector('.back');
    const trailer = document.querySelector('.trailer');
    const iframe = document.querySelector('iframe');
    const video = document.querySelector('.video');
    const body = document.querySelector('body');
    const playing = video.querySelector('video');
    var counter = 0;

    getMovies(movieID);
    getActors(movieID);

    function getMovies(id)
    {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=c5dd1166b8fea2eab352e5822a290868&language=de';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                title.innerText = data.title;
                document.title = data.title;
                handlung.innerText = data.overview;
                picture.src = 'https://image.tmdb.org/t/p/w300/' + data.poster_path;
                container.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://image.tmdb.org/t/p/original' + data.backdrop_path + ') '; //w1400_and_h450_bestv2
                console.log(data.backdrop_path);
            });
    }

    trailer.addEventListener('click', () => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAC7a0_owO8sBF38BlJ-8zUTNgE8MkmBXQ&part=snippet&q=' + title.innerText + '+trailer&type=video&videoDefinition=high&maxResults=1')
        .then(response => response.json())
        .then(data => {
            data.items.forEach(element => {
                console.log(element.id.videoId);
                video.src = 'https://www.youtube.com/embed/' + element.id.videoId + '?autoplay=1';
            });
        })
        iframe.style.visibility = 'visible';
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        document.querySelector('.btn-close').style.visibility = 'visible';
        document.querySelector('.btn-close').addEventListener('click', () => {
            iframe.style.visibility = 'hidden';
            video.src = "";
            body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            document.querySelector('.btn-close').style.visibility = 'hidden';
        });
    });


    function getActors(id)
    {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=c5dd1166b8fea2eab352e5822a290868&language=de')
        .then(response => response.json())
        .then(data => {
            data.cast.forEach(element => {
                console.log(element);
            });
        });
    }
}