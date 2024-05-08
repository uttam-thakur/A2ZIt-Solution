// 'use client'
// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// const center = {
//   lat: 7.2905715, // default latitude
//   lng: 80.6337262, // default longitude
// };

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'YOUR_API_KEY',
//     libraries,
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </div>
//   );
// };

// export default Map;
"use client";

import React, { useState, useEffect } from "react";
function Map() {
  useEffect(() => {
    const ifameData: any = document.getElementById("iframeId");

    const lat = 23.6739452;
    const lon = 86.9523954;
    // console.log("lat", lat + "lon", lon);

    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div>
      {" "}
      <iframe id="iframeId" height="500px" width="100%"></iframe>{" "}
    </div>
  );
}
export default Map;
// "use client";

// import React, { useEffect } from "react";

// function Map() {
//   useEffect(() => {
//     const iframeData: any = document.getElementById("iframeId");
//     const lat = 23.6739452;
//     const lon = 86.9523954;

//     // Construct the URL with fixed latitude and longitude
//     const url = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;

//     // Add a marker to the URL
//     const markerUrl = `https://maps.google.com/maps?q=${lat},${lon}&z=15&t=k&output=embed&markers=color:green%7C${lat},${lon}`;

//     // Set the src attribute of the iframe to display the map with the marker
//     iframeData.src = markerUrl;
//   }, []);

//   return (
//     <div>
//       <iframe id="iframeId" height="500px" width="100%"></iframe>
//     </div>
//   );
// }

// export default Map;
