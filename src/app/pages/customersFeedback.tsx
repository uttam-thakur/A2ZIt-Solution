// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Typography } from "@mui/material";
// import styles from "../style/customerFeedback.module.css";
// import { getFeedbacks } from "../services/services";

// interface Feedback {
//   id: number;
//   name: string;
//   comment: string;
//   image?: string;
// }

// const CustomersFeedback: React.FC = () => {
//   const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const feedbackData = await getFeedbacks();
//         setFeedbacks(feedbackData);
//       } catch (error) {
//         console.error("Failed to fetch feedbacks:", error);
//       }
//     };

//     fetchFeedbacks();
//   }, []);

//   if (!Array.isArray(feedbacks)) {
//     return <div>Error: Feedback data is not an array</div>;
//   }

//   return (
//     <>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ display: "flex", justifyContent: "center" }}
//       >
//         CUSTOMERS REVIEW
//       </Typography>
//       <Carousel data-bs-theme="dark">
//         {feedbacks.map((feedback) => (
//           <Carousel.Item key={feedback.id}>
//             <div className={styles.carasoulDiv}></div>
//             <Carousel.Caption>
//               <img
//                 src={
//                   feedback.image ||
//                   "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais"
//                 }
//                 alt={`image${feedback.id}`}
//                 className={styles.carasoulImage}
//               />
//               <h5 className={styles.lable}>{feedback.name}</h5>
//               <p>{feedback.comment}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </>
//   );
// };

// export default CustomersFeedback;

import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import ContentLoader from "react-content-loader";
import styles from "../style/customerFeedback.module.css";
import { getFeedbacks } from "../services/services";

interface Feedback {
  id: number;
  name: string;
  comment: string;
  image?: string;
}

const CustomersFeedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbackData = await getFeedbacks();
        setFeedbacks(feedbackData);
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (!Array.isArray(feedbacks)) {
    return <div>Error: Feedback data is not an array</div>;
  }

  const FeedbackSkeleton = () => (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className={styles.skeletonLoader}
    >
      <circle cx="150" cy="70" r="50" />{" "}
      {/* Adjust the circle position and size */}
      <rect x="50" y="130" rx="5" ry="5" width="200" height="20" />
      <rect x="75" y="160" rx="5" ry="5" width="150" height="15" />
    </ContentLoader>
  );

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        CUSTOMERS REVIEW
      </Typography>
      {loading ? (
        <div className={styles.skeletonWrapper}>
          <FeedbackSkeleton />
        </div>
      ) : (
        <Carousel data-bs-theme="dark">
          {feedbacks.map((feedback) => (
            <Carousel.Item key={feedback.id}>
              <div className={styles.carasoulDiv}></div>
              <Carousel.Caption>
                <img
                  src={
                    feedback.image ||
                    "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais"
                  }
                  alt={`image${feedback.id}`}
                  className={styles.carasoulImage}
                />
                <h5 className={styles.lable}>{feedback.name}</h5>
                <p>{feedback.comment}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CustomersFeedback;
