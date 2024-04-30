import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import styles from "../style/customerFeedback.module.css";
const CustomersFeedback = () => {
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        CUSTOMERS REVIEW
      </Typography>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div
            // style={{
            //   height: "350px",
            //   width: "800px",
            //   backgroundColor: "white",
            // }}
            className={styles.carasoulDiv}
          ></div>
          <Carousel.Caption>
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
              alt="image1"
              // style={{
              //   height: "150px",
              //   width: "150px",
              //   borderRadius: "50%",
              //   marginBottom: "30px",
              // }}
              className={styles.carasoulImage}
            />

            <h5 className={styles.lable}>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            // style={{
            //   height: "350px",
            //   width: "800px",
            //   backgroundColor: "white",
            // }}
            className={styles.carasoulDiv}
          ></div>
          <Carousel.Caption>
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
              alt="image1"
              // style={{
              //   height: "150px",
              //   width: "150px",
              //   borderRadius: "50%",
              //   marginBottom: "30px",
              // }}
              className={styles.carasoulImage}
            />

            <h5 className={styles.lable}>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            // style={{
            //   height: "350px",
            //   width: "800px",
            //   backgroundColor: "white",
            // }}
            className={styles.carasoulDiv}
          ></div>
          <Carousel.Caption>
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
              alt="image1"
              // style={{
              //   height: "150px",
              //   width: "150px",
              //   borderRadius: "50%",
              //   marginBottom: "30px",
              // }}
              className={styles.carasoulImage}
            />

            <h5 className={styles.lable}>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CustomersFeedback;
