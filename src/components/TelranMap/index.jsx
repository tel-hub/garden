import React, {useRef, useState} from "react";
import GoogleMapReact from "google-map-react";
import {GMAP_API_KEY} from "../../helpers/constants";

export default function TelranMap(props) {
  const defaultProps = {
    center: {
      lat: 52.508052837080164,
      lng: 13.374979513081918
    },
    zoom: 15
  };

  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const renderMarkers = (map, maps) => {
    new maps.Marker({
      position: defaultProps.center,
      title: "Tel-Ran: IT school in Germany",
      map
    });
  };

  const onGoogleApiLoaded = ({map, maps}) => {
    mapRef.current = map;
    renderMarkers(map, maps);
    setMapReady(true);
  };

  return (
    <GoogleMapReact
      apiKey={GMAP_API_KEY}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onGoogleApiLoaded={onGoogleApiLoaded}
    />
  );
}
