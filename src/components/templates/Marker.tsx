import React from 'react'
import Mosque from "@/assets/images/icon/mosque.png"
import Image from 'next/image';

import {Marker} from "@react-google-maps/api"

function MarkerPosition({key, position, onClick, icon}:any) {
    const customIcon:any = {
        url:`https://upload-ppdb.ponpesabuhurairah.id/icon/icon/${icon===1?"markaz.png":icon===2?"mosque.png":"well.png"}`,
        scaledSize: {width:50, height:50},
        anchor:{x:25, y:25}
        // origin: new window.google.maps.Point(0, 0), // Origin point of the icon
        // anchor: new window.google.maps.Point(25, 25) // Anchor point of the icon
      };
  return (
    <Marker key={key} position={position} onClick={onClick} icon={customIcon}/>
  )
}

export default MarkerPosition