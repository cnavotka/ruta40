// Initialize map centerd at Bariloche
  
  function initMap() {
    const options = {
      center: { 
        lat: -41.12015054243244, 
        lng: -71.30249462122084
      },
      zoom: 4
    };
    
    //New map
    const map = new
    google.maps.Map(document.getElementById('map'), options);
  
    //Create markers
    // Briloche  
    const markers = [{
        coordinates: {
          lat: -41.12015054243244,
          lng: -71.30249462122084
        },
        content: '<h5>Bariloche</h5>',
        info: `<img src="https://i.imgur.com/HLgn2WU.jpg" class="img-fluid np-img" alt="Bariloche ski resort"></img>
        <h4 class="py-3 text-center">Bariloche</h4>
        <p>
        A city located within Nahuel Huapi National Park, with Alpine-style inspired architecture. It is a major tourism centre, with lots of skiing, mountaineering and trekking facilities.
        </p>
        <p>
        The chocolate factories here are another popular destination.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> by plane from Buenos Aires to Bariloche.
        </p>`
      },
      {
        // Salinas Grandes
        coordinates: {
          lat: -23.58841, 
          lng: -65.93879
        }, 
        content: '<h5>Salinas Grandes</h5>',
        info: `<img src="https://i.imgur.com/9VF0vXP.jpg" class="img-fluid np-img" alt="Salinas Grandes">
        <h4 class="py-3 text-center">Salinas Grandes</h4>
        <p>
        A salt flat area of 212 square kilometres that looks like a vast white desert. Located at 3450 metres above the sea level the landscape is quite enigmatic. The area was created after volcanic activity dried the sea between 5 and 10 million years BC.
        </p>
        <p>
        The salt is around 30 centimetres deep.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> From Purmamarca, a small village located in the Quebrada de Humuaca by bus or taxi.
        </p>`
      },
      
      {
        // Cafayate
        coordinates: {
          lat: -29.89607, 
          lng: -67.85554
        }, 
        content: '<h5>Cafayate</h5>',
        info: `<img src="https://i.imgur.com/l2DWcBe.jpg" class="img-fluid np-img" alt="vineyard in Cafayate">
        <h4 class="py-3 text-center">Cafayate</h4>
        <p>
        This area is crossed by Ruta 40 and is well known for the landscape and vineyards. The altitude	 and amount of sunny days per year, plus the soil composition, make the area around the town a paradise for grapes. 
        </p>
        <p>
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> You can get there by a local bus from Salta city, the province capital. If travelling from Buenos Aires you can get a plane to Salta Airport or travel by long distance bus.
        </p>`
      },
      
      
      
      
      
      
    ];
     // Credit code take from https://github.com/FruitbatM/explore-national-parks-of-japan/
    //Loop through markers 
    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
  
    // Marker function
    function addMarker(props) {
      const marker = new google.maps.Marker({
      position: props.coordinates,
      map: map,
    });
  
      if(props.content) {
        const infowindow = new google.maps.InfoWindow ({
          content:props.content
        });

  
        // Open info window when clicked on the marker
        google.maps.event.addListener(marker, 'click', function() {
          if(!marker.open) {
            infowindow.open(map, marker);
            marker.open = true;
          }

          // Close info window when clicked on the marker
          else {
            infowindow.close();
            marker.open = false;
          }

          // Close info window when clicked anywhere on the map and the info window was opened
          google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
            marker.open = false;
        });
      });
  
        // Info shows in the side column when the marker is clicked
        google.maps.event.addListener(marker, 'click', (function(i) {
  
          return function() {
            document.getElementById('side-column').innerHTML = markers[i].info;
          };
        })(i));
      }
    }
  }