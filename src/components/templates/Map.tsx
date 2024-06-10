"use client";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -8.6525,
  lng: 117.3616,
};

const options = {
  mapTypeId: "satellite",
  labels: true,
  //   zoomControl: false,
  center: center,
  zoom: 9,
};

export default function Map(props: any) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2jb_cTEtzURJ5P9KyO0ZbfVrujgEeee4",
  });
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const onMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} options={options}>
      {props.markers.map((marker: any, index: number) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={()=>onMarkerClick(marker)}
        />
      ))}
      {
        selectedMarker&&(
          <InfoWindow position={{lat:selectedMarker.position.lat, lng:selectedMarker.position.lng}} onCloseClick={handleCloseInfoWindow}>
            <div>
              <h2>Info</h2>
              <p>{selectedMarker.title}</p>
            </div>
          </InfoWindow>
        )
      }
    </GoogleMap>
  ) : (
    <></>
  );
}
