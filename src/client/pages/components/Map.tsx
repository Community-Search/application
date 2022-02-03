import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

export default function CSMap() {
    const MB_token: string = "pk.eyJ1IjoidmZydW56YSIsImEiOiJja3kzb3FsZHAwM3dwMnVvNDM5dWcybmNkIn0.mve10XQF3yBbeDCbCeZP3g";
    
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });
    
      return (
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MB_token}
        />
      );
};
