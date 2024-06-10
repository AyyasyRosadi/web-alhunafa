"use client";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import MarkerPosition from "./Marker";
import Image from "next/image";
import Example from "@/assets/images/example.jpg"
import Card from "./Card";

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
        <MarkerPosition
          key={index}
          position={marker.position}
          onClick={() => onMarkerClick(marker)}
          icon={marker.type}
        />
      ))}
      {
        selectedMarker && (
          <InfoWindow position={{ lat: selectedMarker.position.lat, lng: selectedMarker.position.lng }} onCloseClick={handleCloseInfoWindow}>
            <div className="text-right font-bahij">
              <h2 className="text-base text-lg mb-2">معلومة</h2>
              <div className="flex flex-col gap-2 w-72">
                <Image src={Example} alt="" className="w-72 h-40 bg-green-500" />
                <p className="text-base">{selectedMarker.title}</p>
                <p className="text-xs">هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية عانت من التغيير بشكل ما، عن طريق إدخال الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم فقرة من نص لوريم إيبسوم، فيجب أن تتأكد من عدم وجود أي شيء محرج مخفي في منتصف النص.</p>
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
