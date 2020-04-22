const map = L.map('mapid').setView([-23.6, -46.64], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

async function getPlants() {
  const res = await fetch('/api/v1/plants/localization');
  const data = await res.json();

  return data;
}

// Load map with stores
function loadMap(data) {
  const geojsonMarkerOptions = {
    radius: 10,
    fillColor: '#228B22',
    weight: 0,
    fillOpacity: 0.6,
  };

  L.geoJSON(data, {
    onEachFeature: onEachFeature,
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    },
  }).addTo(map);
}

getPlants().then((data) => loadMap(data));
