import React from "react";
import Navbar from "../component/Navbar";
import styles from "../style/contact.module.css";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Map from "../pages/map";
import FeedbackForm from "../pages/feedbackForm";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};
const page = () => {
  return (
    <>
      <Navbar />
      <img
        style={{ marginTop: "-50px" }}
        src={
          "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?size=626&ext=jpg&ga=GA1.1.718586984.1712132500&semt=ais"
        }
        width="100%"
        height="400px"
        alt={"contact image"}
      />

      <div className={styles.contact_container}>
        {/* First Row */}
        <div className={styles.contact_item} style={{ marginTop: "50px" }}>
          <AdUnitsIcon className={styles.icon} />

          <div className={styles.divitem}>
            <p>Mobile No:</p>
            {/* <p>8670288140</p> */}
            <p
              id="mobileNumber"
              // onClick={() => handleCopyMobileNumber("8670288140")}
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
      <Map />
      <FeedbackForm />
    </>
  );
};

export default page;
