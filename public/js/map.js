const map = L.map('mapid').setView([-23.6, -46.64], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

async function getPlants() {
  const res = await fetch('/api/v1/plants/localization');
  const data = await res.json();

  return data;
}

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

function treeIcon(feature, latlng) {
  let myIcon = L.icon({
    iconUrl: './assets/tree.png',
    shadowUrl: './assets/tree.png',
    iconSize: [50, 50], // width and height of the image in pixels
    shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6], // anchor point of the shadow. should be offset
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });

  return L.marker(latlng, { icon: myIcon });
}

// Load map with stores
function loadMap(data) {
  let options = {
    onEachFeature: onEachFeature,
    pointToLayer: treeIcon,
  };

  L.geoJSON(data, options).addTo(map);
}

getPlants().then((data) => loadMap(data));
