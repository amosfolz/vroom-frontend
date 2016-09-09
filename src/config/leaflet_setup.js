'use strict';

var api = require('./api');
var L = require('leaflet');

var initCenter = L.latLng(48.8579,2.3494);
var initZoom = 13;

// Define a valid bounding box here in order to restrict map view and
// place definition.
var maxBoundingBox;

var tileLayer = L.tileLayer(api.tileLayer, {
  attribution: 'Demo solver hosted by '
    + api.description
    + ' | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('map', {layers: [tileLayer]}).setView(initCenter, initZoom);

module.exports = {
  map: map,
  maxBoundingBox: maxBoundingBox,
  initCenter: initCenter,
  initZoom: initZoom,
  tileLayer: tileLayer,
  opacity: 0.6,
  weight: 8,
  jobIcon: L.icon({
    iconUrl: 'images/job-icon.png',
    iconSize: [15, 15],
    iconAnchor: [7.5, 7.5],
    popupAnchor: [0, 0]
  }),
  startIcon: L.icon({
    iconUrl: 'images/start-icon.png',
    iconSize: [15, 15],
    iconAnchor: [7.5, 7.5],
    popupAnchor: [0, 0]
  }),
  endIcon: L.icon({
    iconUrl: 'images/end-icon.png',
    iconSize: [15, 15],
    iconAnchor: [7.5, 7.5],
    popupAnchor: [0, 0]
  })
};
