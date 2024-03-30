import React from "react";
import WriteUs from "./writeUs";
import ContactUs from "./contactUs";

const Combine = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" }}
    >
      <WriteUs />
      <ContactUs />
    </div>
  );
};

export default Combine;
