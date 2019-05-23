import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import * as parkData from './data/data.json'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  return (
    <div>
     <ReactMapGL 
      { ...viewport }
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v10"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
     >
      { parkData.features.map( park => (
        <Marker 
          key={park.properties.PARK_ID} 
          latitude={park.geometry.coordinates[1]} 
          longitude={park.geometry.coordinates[0]}
        >
          <button className="marker-btn">
            <img src="/skate.svg" alt="skateboard icon" />
          </button>
        </Marker>
      )) }
     </ReactMapGL>
    </div>
  );
}

export default App;
