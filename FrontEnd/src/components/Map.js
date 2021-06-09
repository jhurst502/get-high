import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import { CoordinatesContext } from '../CoordinatesContext';
import { Marker } from 'mapbox-gl';


mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoiamh1cnN0NSIsImEiOiJja28zb2Y4cGMweDVsMnVqbmQ2MjJjYWM5In0.fNJOa1thSU7wI9IKSJSTLA';

const Map = ({locations}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(13);

  const { coords } = useContext(CoordinatesContext);

  useEffect(() => {
    // Bound checking on coords fixes iunnitial rendering bug
    let lattitude = 35;
    let longitude = 35;
    if (coords[1] <= 90 && coords[1] >= -90) {
      lattitude = coords[1];
      longitude = coords[0];
    }
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
      center: [longitude - .01, lattitude - .01],
      pitch: 55,
      bearing: 0,
      zoom: zoom,
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));

      // add fog
      map.current.on('load', () => {
        map.current.setFog({
          'range': [0, 6],
          'color': '#f2f8fa',
          'horizon-blend': 0.1
        });
      })

    });

    map.current.on('load', function () {
      function render3DPromise() {
        return new Promise(() => {
          map.current.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
          });
          // add the DEM source as a terrain layer with exaggerated height
          map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1 });
        });
      }

      // Render map in 3D then run animation
      render3DPromise();
    
     
    });
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    // TODO remove all markers once new zipcode is selected 
    // Sets marker for each highpoint as each zip location changes 
    // All old markers are removed once a new zipcode is requested
    const marker0 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[0].lng, locations[0].lat]).addTo(map.current);
    const marker1 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[1].lng, locations[1].lat]).addTo(map.current);
    const marker2 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[2].lng, locations[2].lat]).addTo(map.current);
    const marker3 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[3].lng, locations[3].lat]).addTo(map.current);
    const marker4 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[4].lng, locations[4].lat]).addTo(map.current);
    const marker5 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[5].lng, locations[5].lat]).addTo(map.current);
    const marker6 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[6].lng, locations[6].lat]).addTo(map.current);
    const marker7 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[7].lng, locations[7].lat]).addTo(map.current);
    const marker8 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[8].lng, locations[8].lat]).addTo(map.current);
    const marker9 = new mapboxgl.Marker({scale: .9, color: '#EB5B55'}).setLngLat([locations[9].lng, locations[9].lat]).addTo(map.current);
    
  }, [locations]);

  useEffect(() => {
    map.current.panTo([coords[0], coords[1]], { zoom: 13, bearing: 0 });

    map.current.once('idle', function () { // Waits for 3D elements to load before animation
      map.current.easeTo({
        center:[coords[0], coords[1]],
        bearing: 180,
        zoom: 13.5,
        easing: easeIn,
        duration: 50000,
      });
    })

    // start slow and gradually increase speed
    function easeIn(t) {
      return t;
    }

  }, [coords]);

  return (
    <div>
      <div class="z-20 py-1 px-3 absolute left-5 top-5 sm:left-7 bg-blue-100 rounded-lg sm:py-3 sm:px-4 opacity-95">
        <h1 class="inline text-gray-600">Longitude: </h1>{parseFloat(coords[0]).toFixed(4)}  <h1 class="inline text-gray-600">Latitude: </h1>{parseFloat(coords[1]).toFixed(4)}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;

