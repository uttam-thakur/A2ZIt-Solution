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
