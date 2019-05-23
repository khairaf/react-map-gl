import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import * as parkDate from './data/data.json'

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

     </ReactMapGL>
    </div>
  );
}

export default App;
