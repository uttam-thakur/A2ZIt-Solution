import Image from "next/image";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../style/customerFeedback.module.css";

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
      name: "Abhra Dey",
      comment:
        "Outstanding laptop service! My device was slow and lagging, but after their maintenance, it's performing like brand new. Highly recommended for quick and efficient service.",
      image: "/images/5.png",
    },
    {
      id: 2,
      name: "Dr. Pravin Roy",
      comment:
        "Purchased a high-performance computer from them, and I must say, the quality is top-notch. The team guided me well and helped me choose the best system for my needs. Great pricing too!",
      image: "/images/5.png",
    },
    {
      id: 3,
      name: "Ratan Jaiswal",
      comment:
        "Got my CCTV system installed, and I’m really impressed with the clarity of the footage. The installation was done professionally, and they ensured everything was working perfectly.",
      image: "/images/5.png",
    },
    {
      id: 4,
      name: "Rahul Prasad",
      comment:
        "Their AMC service has been a lifesaver for our office! Regular maintenance checks keep all our computers, laptops, and CCTV systems running smoothly without any downtime. Excellent support team!",
      image: "/images/5.png",
    },
    {
      id: 5,
      name: "Abhishek Prasad",
      comment:
        "Fast and reliable computer repair service. My PC had multiple issues, but their technicians diagnosed and fixed everything quickly. Now, it's running better than ever. Highly satisfied!",
      image: "/images/5.png",
    },
    {
      id: 6,
      name: "Kuldip Kr Sah",
      comment:
        "Top-notch software maintenance service! They handle all updates, bug fixes, and security patches, ensuring our business software stays optimized and secure. A great investment for long-term performance!",
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
              <p className={styles.comment}>{feedback.comment}</p>
              <h5 className={styles.lable}>{feedback.name}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CustomersFeedback;
