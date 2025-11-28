"use client";
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
    {
  id: 7,
  name: "Suman Kumar",
  comment:
    "I had a broken laptop hinge and damaged keyboard. They replaced everything perfectly and at a very reasonable price. The laptop feels brand new again. Great workmanship!",
  image: "/images/5.png",
},
{
  id: 8,
  name: "Nikita Sharma",
  comment:
    "Their CCTV installation at our home was done very neatly. The camera quality is excellent, even at night. They also helped us set up the mobile app. Truly professional service.",
  image: "/images/5.png",
},
{
  id: 9,
  name: "Aman Verma",
  comment:
    "My PC had constant blue screen issues. Their team identified the faulty RAM and fixed it quickly. The system has been stable ever since. Very honest and trustworthy service!",
  image: "/images/5.png",
},
{
  id: 10,
  name: "Sonu Raj",
  comment:
    "We hired them to redesign our old website. The new one is faster, modern, and much easier for customers to use. They handled everything smoothly from design to deployment.",
  image: "/images/5.png",
},
{
  id: 11,
  name: "Priya Singh",
  comment:
    "Super quick laptop SSD upgrade! They explained the difference between SSD and HDD, backed up my data, and installed the new drive in under an hour. My laptop now boots in seconds.",
  image: "/images/5.png",
},
{
  id: 12,
  name: "Rohit Mishra",
  comment:
    "Installed CCTV across our office floors. The wiring was clean, cameras positioned perfectly, and the recording quality is crystal clear. Very satisfied with the overall setup!",
  image: "/images/5.png",
},
{
  id: 13,
  name: "Arjun Keshri",
  comment:
    "Amazing desktop repair experience. They fixed my power supply issue and cleaned the system thoroughly. The PC is running cooler and faster now. Highly recommended!",
  image: "/images/5.png",
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
