// "use client";
// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Typography } from "@mui/material";
// import styles from "../style/customerFeedback.module.css";
// import axios from "axios";

// const CustomersFeedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const response = await axios.get(
//           "https://hostapi-production-15e5.up.railway.app/api/feedback/all"
//         );
//         setFeedbacks(response.data);
//         console.log("----->", response.data.data);
//       } catch (error) {
//         console.error("Failed to fetch feedbacks:", error);
//       }
//     };

//     fetchFeedbacks();
//   }, []);

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
//         <Carousel.Item>
//           <div className={styles.carasoulDiv}></div>
//           <Carousel.Caption>
//             <img
//               src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
//               alt="image1"
//               className={styles.carasoulImage}
//             />

//             <h5 className={styles.lable}>First slide label</h5>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className={styles.carasoulDiv}></div>
//           <Carousel.Caption>
//             <img
//               src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
//               alt="image1"
//               className={styles.carasoulImage}
//             />

//             <h5 className={styles.lable}>Second slide label</h5>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className={styles.carasoulDiv}></div>
//           <Carousel.Caption>
//             <img
//               src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais "
//               alt="image1"
//               className={styles.carasoulImage}
//             />

//             <h5 className={styles.lable}>Third slide label</h5>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// };

// export default CustomersFeedback;

// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Typography } from "@mui/material";
// import axios from "axios";
// import styles from "../style/customerFeedback.module.css";

// // Define an interface for the feedback data structure
// interface Feedback {
//   id: number; // Adjust based on your API response
//   name: string;
//   comment: string;
//   image?: string; // Image might be optional
// }

// const CustomersFeedback: React.FC = () => {
//   const [feedbacks, setFeedbacks] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const response = await axios.get<Feedback[]>(
//           "https://hostapi-production-15e5.up.railway.app/api/feedback/all"
//         );
//         setFeedbacks(response?.data);
//         console.log("+++>", response.data);
//       } catch (error) {
//         console.error("Failed to fetch feedbacks:", error);
//       }
//     };

//     fetchFeedbacks();
//   }, []);
//   // console.log("++++>", feedbacks);

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
//         {feedbacks?.map((feedback: any) => (
//           <Carousel.Item key={feedback.id}>
//             <div className={styles.carasoulDiv}></div>
//             <Carousel.Caption>
//               <img
//                 src={feedback.image || "https://via.placeholder.com/150"} // Use a default image if no image URL is provided
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
import axios from "axios";
import styles from "../style/customerFeedback.module.css";

// Define an interface for the feedback data structure
interface Feedback {
  id: number; // Adjust based on your API response
  name: string;
  comment: string;
  image?: string; // Image might be optional
}

const CustomersFeedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          "https://hostapi-production-15e5.up.railway.app/api/feedback/all"
        );

        // Check if the response is an array
        if (Array.isArray(response.data.data)) {
          setFeedbacks(response.data.data);
        } else {
          console.error("API response is not an array:", response.data);
          console.log("---->", response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  // Check if feedbacks is an array before mapping
  if (!Array.isArray(feedbacks)) {
    return <div>Error: Feedback data is not an array</div>;
  }

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
        {feedbacks.map((feedback) => (
          <Carousel.Item key={feedback.id}>
            <div className={styles.carasoulDiv}></div>
            <Carousel.Caption>
              <img
                src={
                  feedback.image ||
                  "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais"
                } // Use a default image if no image URL is provided
                alt={`image${feedback.id}`}
                className={styles.carasoulImage}
              />
              <h5 className={styles.lable}>{feedback.name}</h5>
              <p>{feedback.comment}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CustomersFeedback;
