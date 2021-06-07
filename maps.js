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
        <strong>How to get there:</strong> By plane from Buenos Aires to Bariloche.
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
        <strong>How to get there:</strong> By a local bus from Salta city, the province capital. If travelling from Buenos Aires you can get a plane to Salta Airport or travel by long distance bus.
        </p>`
      },
      
      {
        // Parque Nacional Los Cardones
        coordinates: {
          lat: -25.19109, 
          lng: -66.02992
        }, 
        content: '<h5>Parque Nacional Los Cardones</h5>',
        info: `<img src="https://i.imgur.com/xgVn9B6.jpg" class="img-fluid np-img" alt="Los Cardones cacti">
        <h4 class="py-3 text-center">Parque Nacional Los Cardones</h4>
        <p>
        This national park is the second largest cactus growing in the world. You can expect to find animals like llamas, armadillos and pumas. Due to extreme temperatures and terrain conditions, it is advisable to use a local guide to explore the area. 
        </p>
        <p>
        The park is crossed by the “Inca Trail”, a perfect straight road of 19 kilometres made by the Inca Empire.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying to Salta from Buenos Aires and a bus from the bus station in Salta heading to Cachi.
        </p>`
      },
      
      {
        // Cuesta del Obispo
        coordinates: {
          lat: -23.58841, 
          lng: -65.93879
        }, 
        content: '<h5>Cuesta del Obispo</h5>',
        info: `<img src="https://i.imgur.com/lHU6b8W.jpg" class="img-fluid np-img" alt="Cuesta del Obispo">
        <h4 class="py-3 text-center">Cuesta del Obispo</h4>
        <p>
        A corkscrew road of the 20 kilometres that goes from Salta city to Parque Nacional Los Cardones. It reaches an altitude of 3348 metres above the sea level. 
        </p>
        <p>
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> Flying from Buenos Aires to Salta city and catch the local bus from the bus station in Salta.
        </p>`
      },
      
      {
        // Cerro de Los Siete Colores
        coordinates: {
          lat: -23.74877, 
          lng: -65.50682
        }, 
        content: '<h5>Cerro de Los Siete Colores</h5>',
        info: `<img src="https://i.imgur.com/uVq4V05.jpg" class="img-fluid np-img" alt="Cerro de los Siete Colores">
        <h4 class="py-3 text-center">Cerro de Los Siete Colores</h4>
        <p>
        The Seven Colours Hill located besides Purmamarca village is a stunning geological formation more than seventy five millions old.
        </p>
        <p>
        The area is ideal for the inexperienced trekker.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying from Buenos Aires to Jujuy, capitol of the province and getting a bus from the main station.
        </p>`
      },

      {
        // Parque Nacional Talampaya
        coordinates: {
          lat: -29.89607, 
          lng: -67.85554
        }, 
        content: '<h5>Parque Nacional Talampaya</h5>',
        info: `<img src="https://i.imgur.com/UvXSMx5.jpg" class="img-fluid np-img" alt="Talampaya">
        <h4 class="py-3 text-center">Talampaya</h4>
        <p>
        This national park is an UNESCO World Heritage site and is famous for its red landscape. The rocky walls rise up to 80 metres.
        </p>
        <p>
        Palaeontology is important in the area with dinosaurs footprints and fossils.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying from Buenos Aires to La Rioja and a bus from there to the park that crosses Villa Union, the closest town.
        </p>`
      },
      
      {
        // Parque Provincial Ischigualasto
        coordinates: {
          lat: -30.17790, 
          lng: -67.86721
        }, 
        content: '<h5>Parque Provincial Ischigualasto</h5>',
        info: `<img src="https://i.imgur.com/jb8hMX0.jpg" class="img-fluid np-img" alt="Ischigualasto">
        <h4 class="py-3 text-center">Parque Provincial Ischigualasto</h4>
        <p>
        The Provincial Park Ischigualasto is also know as Valle de la Luna (Moon Valley) due to its moon like appearance.
        </p>
        <p>
        It is a rich fossil area, with strong winds that sculpted the rocks giving the landscape an unusual shape. 
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying from Buenos Aires to San Juan. From the bus terminal there, you can get a connection to El Jachal, the closest village.

        </p>`
      },

      {
        // Parque Nacional El Leoncito
        coordinates: {
          lat: -31.79041, 
          lng: -69.34649
        }, 
        content: '<h5>Parque Nacional El Leoncito</h5>',
        info: `<img src="https://i.imgur.com/0bgBJCr.jpg" class="img-fluid np-img" alt="PN El Leoncito">
        <h4 class="py-3 text-center">Parque Nacional El Leoncito</h4>
        <p>
        El Leoncito National Park is surrounded by the Big Six (six mountains 6,000 metres above sea level). The dry weather guarantees at least 300 days of clear skies and because of this two astronomical observatories are located there.
        </p>
        <p>
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying from Buenos Aires to San Juan. From the bus station you can get a connection to El Barreal, the closest town.
        </p>`
      },

      {
        // Mendoza
        coordinates: {
          lat: -32.86350, 
          lng: -68.86844
        }, 
        content: '<h5>Mendoza</h5>',
        info: `<img src="https://i.imgur.com/4xGPBn9.jpg" class="img-fluid np-img" alt="Mendoza">
        <h4 class="py-3 text-center">Mendoza</h4>
        <p>
        The city is a stopover for climbers heading to Aconcagua (highest mountain in the Western Hemisphere) and is also known for wine production. Ideal for camping and for wine aficionados and winter sports.
        </p>
        <p>
        Bicycle tours between vineyards are a popular activity.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying from Buenos Aires to Mendoza where you can get a local bus or just rent a bicycle.
        </p>`
      },

      {
        // El Chalten
        coordinates: {
          lat: -49.33099, 
          lng: -72.89517
        }, 
        content: '<h5>El Chalten</h5>',
        info: `<img src="https://i.imgur.com/KBtWERD.jpg" class="img-fluid np-img" alt="El Chalten">
        <h4 class="py-3 text-center">El CHalten</h4>
        <p>
        Located within Los Glaciares National Park this is a small town near the base of Cerro Torre and El Chalten spires.
        </p>
        <p>
        Popular for hiking the numerous lakes and glaciers, it is know as Argentina’s Trekking Capital.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By plane from Buenos Aires to El Calafate, connecting by bus from the station.
        </p>`
      },

      {
        // Estancia La Leona
        coordinates: {
          lat: -49.80550, 
          lng: -72.05352
        }, 
        content: '<h5>Estancia La Leona</h5>',
        info: `<img src="https://i.imgur.com/aP91kaK.jpg" class="img-fluid np-img" alt="Estancia La Leona">
        <h4 class="py-3 text-center">Estancia La Leona</h4>
        <p>
        La Leona Ranch, located halfway between El Calafate and El Chalten, is a farm mainly focused on sheep and wool production. 
        </p>
        <p>
        It is renowned as a place where Butch Cassidy and the Sundance Kid hid after robbing a bank in Rio Gallegos.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By flying to Cafayate from Buenos Aires and getting the bus that goes to El Chalten.
        </p>`
      },
      
      {
        // Parque Nacional Los Glaciares
        coordinates: {
          lat: -50.47430, 
          lng: -73.04661
        }, 
        content: '<h5>Parque Nacional Los Glaciares</h5>',
        info: `<img src="https://i.imgur.com/t3I7X30.jpg"" class="img-fluid np-img" alt="Parque Nacional Los Glaciares">
        <h4 class="py-3 text-center">Parque Nacional Los Glaciares</h4>
        <p>
        A National Park with many glaciers, the most famous being Perito Moreno which is one of the few growing glaciers in the world.
        </p>
        <p>
        Fishing, camping and ice trekking are the main activities in the area.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By plane from Buenos Aires to El Calafate and from there a bus to the National Park.
        </p>`
      },

      {
        // Ushuais
        coordinates: {
          lat: -54.71473, 
          lng: -68.85522
        }, 
        content: '<h5>Ushuaia</h5>',
        info: `<img src="https://i.imgur.com/NMJDGC4.jpg" class="img-fluid np-img" alt="Ushuaia">
        <h4 class="py-3 text-center">Ushuaia</h4>
        <p>
        The southernmost city in the world, and the end of the journey for travellers doing Ruta 40. 
        </p>
        <p>
        Ideally for people who enjoy trakking and mountaineering.
        </p>
        <p class="pb-2">
        <strong>How to get there:</strong> By plane from Buenos Aires to the local airport and get a local bus that connects to the city.
        </p>`
      },
      
      {
        // Faro del Fin el Mundo
        coordinates: {
          lat: -54.87158, 
          lng: -68.08402
        }, 
        content: '<h5>Faro del Fin del Mundo</h5>',
        info: `<img src="https://i.imgur.com/OvRjGTy.jpg" class="img-fluid np-img" alt="Faro del Fin del Mundo">
        <h4 class="py-3 text-center">Faro del Fin del Mundo</h4>
        <p>
        Les Eclaireurs Lighthouse (the Scouts in French) which is located 5 nautical miles from Ushuaia, is generally dubbed as “the world’s End lighthouse” and inspired Jules Verne to write the novel “The Lighthouse at the End of the World”.
        </p>
        <p></p>
        <p class="pb-2">
        <strong>How to get there:</strong> You need to buy a boat ticket from Ushuaia to see the lighthouse.
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