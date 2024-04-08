import React from "react";
import styles from "../style/contact.module.css";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography } from "@mui/material";
const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "#e5e5e5", opacity: 0.9 }}>
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
            <p>8670288140</p>
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
          <HomeIcon className={styles.icon} />
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
    </div>
  );
};

export default ContactUs;
