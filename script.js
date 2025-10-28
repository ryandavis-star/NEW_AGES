mapboxgl.accessToken = 'pk.eyJ1IjoiYXF1YXJpYW53YXZlcmlkZXIiLCJhIjoiY21oOWliZTN1MWdqbTJqb2FyOGRoYnRvYyJ9.DM7eD2_0NHuoR_R3MYNHNA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/aquarianwaverider/cmh9jilv700b401sq3qjz2hop', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 5 // starting zoom
    });