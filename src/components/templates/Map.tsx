"use client";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import MarkerPosition from "./Marker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { url } from "../constant/Url";
import loadingImage from "@/assets/images/icon/loading.png"


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

const loaderProp = ({ src }: { src?: any }) => {
  return src;
}



export default function Map({ markers, centers }: { markers: any, centers?: any }) {
  const navigate = useRouter()
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2jb_cTEtzURJ5P9KyO0ZbfVrujgEeee4",
  });
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const options = Object.keys(centers)?.length !== 0 ? {
    mapTypeId: "satellite",
    labels: true,
    center: { lat: parseFloat(centers?.lat), lng: parseFloat(centers?.long) },
    zoom: 18,
  } : {
    mapTypeId: "satellite",
    labels: true,
    center: center,
    zoom: 9,
  }
  const onMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} options={options}>
      {markers?.length > 0 && markers?.map((marker: any, index: number) => (
        <MarkerPosition
          key={index}
          position={marker?.position}
          onClick={() => onMarkerClick(marker)}
          icon={marker.type}
        />
      ))}
      {
        selectedMarker && (
          <InfoWindow  position={{ lat: selectedMarker.position.lat, lng: selectedMarker.position.lng }} onCloseClick={handleCloseInfoWindow}>
            <div className="text-right font-bahij cursor-pointer" onClick={() => navigate.push(`/detail/${selectedMarker?.id}`)}>
              <h2 className="text-base text-lg mb-2">معلومة</h2>
              <div className="flex flex-col gap-2 w-72 bg-white z-10">
                {selectedMarker?.image ?
                  <Image loading="lazy" src={`${url}/${selectedMarker?.image}`} loader={loaderProp} width={1000} height={1000} alt="image" className="w-72 h-40" />
                  :
                  <Image loading="lazy" src={loadingImage} alt="" className='w-12 h-12 animate-spin' />
                }
                <p className="text-base">{selectedMarker?.title}</p>
                <p className="text-xs">{selectedMarker?.description}</p>
              </div>
            </div>
          </InfoWindow>
        )
      }
    </GoogleMap>
  ) : (
    <></>
  );
}
