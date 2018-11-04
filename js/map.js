mapboxgl.accessToken = 'pk.eyJ1IjoiZW10ZWNzIiwiYSI6ImNqbmVmbXl6dzA3ZDMzbHBkdGlvODB4dnkifQ.B58VyP6B2p7VW4riDun6Kw';
var mymap = new mapboxgl.Map({
    container: 'mymap',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-0.118092, 51.509865], // starting position
    zoom: 11 // starting zoom
});

