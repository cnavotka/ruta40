// Initialize and add the map
function initMap() {
    // The location of Bariloche
    const bariloche = { lat: -41.12015054243244, lng: -71.30249462122084 };
    // The map, centered at Bariloche
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: bariloche,
    });
    // The marker, positioned at Bariloche
    const marker = new google.maps.Marker({
      position: bariloche,
      map: map,
    });
  }