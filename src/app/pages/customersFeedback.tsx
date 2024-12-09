import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import styles from "../style/customerFeedback.module.css";
import Image from "next/image";

interface Feedback {
  id: number;
  name: string;
  comment: string;
  image?: string;
}

const CustomersFeedback: React.FC = () => {
  // Fake feedback data
  const fakeFeedbacks: Feedback[] = [
    {
      id: 1,
      name: "John Doe",
      comment: "Excellent service! Highly recommended.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Great quality products! Will purchase again.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Robert Johnson",
      comment: "Fast delivery and very professional.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [feedbacks] = useState<Feedback[]>(fakeFeedbacks); // Set state with fake data

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        CUSTOMERS REVIEW
      </Typography>
      <Carousel variant="dark">
        {feedbacks.map((feedback) => (
          <Carousel.Item key={feedback.id}>
            <div className={styles.carasoulDiv}></div>
            <Carousel.Caption>
              <Image
                src={feedback.image || "https://via.placeholder.com/150"}
                width={150}
                height={150}
                alt={`Customer image ${feedback.id}`}
                className={styles.carasoulImage}
              />
              <h5 className={styles.lable}>{feedback.name}</h5>
              <p className={styles.lable}>{feedback.comment}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CustomersFeedback;
