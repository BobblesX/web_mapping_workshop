///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'bobblesx.k7be10ag'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiYm9iYmxlc3giLCJhIjoibHZGdFNRVSJ9.u1_VcdT6AdCBdeBYm4mmTA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([38.864, -104.963], 12);
