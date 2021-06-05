
  
  // Initalize map centered in Bariloche
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -41.12015054243244, lng: -71.30249462122084 },
    });
    
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  // first location world ends lighthouse
  const locations = [

    { lat: -54.73363, lng: -63.855522},
    
    // ushuaia
    { lat: -54.71473, lng: -68.85522},
    
    // perito moreno
    { lat: -50.47430, lng: -73.04661 },
    // la leona
    { lat: -49.80550, lng: -72.05352 },
    // el chalten
    { lat: -49.33099, lng: -72.89517},
    // bariloche
    { lat: -41.12015054243244, lng: -71.30249462122084 },
    // mendoza
    { lat: -32.86350, lng: -68.86844 },
    // valle de la luna
    { lat: -30.17790, lng: -67.86721},
    // leoncito
    { lat: -31.79041, lng: -69.34649},
    // talampaya
    { lat:-29.89607, lng: -67.85554},
    // cafayate
    {lat: -26.07449, lng: -65.97087},
    // los cardones
    {lat: -25.19109, lng: -66.02992},
    // purmamarca
    {lat: -23.74877, lng: -65.50682},
    // salinas grandes
    {lat: -23.58841, lng: -65.93879},
    // cuesta
    {lat: -25.18712, lng: -65.84746},
  
];
  