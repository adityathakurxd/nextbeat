fetch('https://api.spotify.com/v1/recommendations?limit=1&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', 
{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ',
    },
})
    .then(data => data.json())
    .then(musicData =>{
        const musicName = musicData.tracks[0].album.name;
        const musicNameElement = document.getElementById('musicNameElement');

        musicNameElement.innerHTML = musicName;
    })