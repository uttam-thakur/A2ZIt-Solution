"use client";
import React, { useState } from "react";
import styles from "../style/contact.module.css";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography, Dialog } from "@mui/material";
import Map from "../pages/map";
import { ToastContainer, toast } from "react-toastify";
import FeedbackForm from "./feedbackForm";

const ContactUs = () => {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };

  const handleCloseMap = () => {
    setOpenMap(false);
  };

  const handleCopyMobileNumber = (mobileNumber: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = mobileNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    toast.success("Mobile Number Is Copied");
  };

  return (
    <div className={styles.background}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ padding: "1rem" }}
      >
        Contact Us
      </Typography>
      <div className={styles.contact_container}>
        {/* First Row */}
        <div className={styles.contact_item} style={{ marginTop: "50px" }}>
          <AdUnitsIcon className={styles.icon} />
          <div className={styles.divitem}>
            <p>Mobile No:</p>
            <p
              id="mobileNumber"
              onClick={() => handleCopyMobileNumber("8670288140")}
            >
              8670288140
            </p>
          </div>
        </div>
        <div className={styles.contact_item} style={{ marginTop: "50px" }}>
          <EmailIcon className={styles.icon} />
          <div className={styles.divitem}>
            <p>Email:</p>
            <p>info@example.com</p>
          </div>
        </div>
        {/* Second Row */}
        <div className={styles.contact_item} style={{ marginTop: "195px" }}>
          <HomeIcon
            className={styles.icon}
            onClick={handleOpenMap} // Open the map when HomeIcon is clicked
          />
          <div className={styles.divitem}>
            <p>Address:</p>
            <p>Lower Chelidanga, Asansol, W.B</p>
          </div>
        </div>
        <div className={styles.contact_item} style={{ marginTop: "195px" }}>
          <AccessTimeIcon className={styles.icon} />
          <div className={styles.divitem}>
            <p>Timing:</p>
            <p>Mon-Fri: 9 AM - 9 PM</p>
            <p>Sat-Sun: 9 AM - 4 PM</p>
          </div>
        </div>
      </div>
      {/* Dialog to display the map */}
      <Dialog open={openMap} onClose={handleCloseMap} maxWidth="lg" fullWidth>
        <Map />
      </Dialog>
    </div>
  );
};

export default ContactUs;
