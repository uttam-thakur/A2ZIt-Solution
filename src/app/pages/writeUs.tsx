"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import emailjs from "emailjs-com";
// import { useDispatch, useSelector } from "react-redux";
// import { collection, addDoc } from "firebase/firestore";
// import { auth, db } from "../firebase";
// import { RootState } from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";
// import { saveFeedback } from "../store/feedbackSlice";
// import Footer from "./Footer";

const WriteUs: React.FC = () => {
  // const dispatch = useDispatch();
  // const userCredential = useSelector(
  //   (state: RootState) => state.auth.userCredential
  // );

  const [feedback, setFeedback] = useState({
    namee: "",
    emaill: "",
    comment: "",
    rating: 0,
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l37lwpj",
        "template_25ybnov",
        e.currentTarget,
        "Nw7AxfQ-a0XQdVmy0"
      )
      .then((res: any) => {
        // console.log(res);
        toast.success("Email sent successfully!");
      })
      .catch((err: any) => {
        // console.error(err);
        toast.error("Failed to send email. Please try again.");
      });
  };

  const sendFeedbackHandler = () => {
    if (
      feedback.namee.length < 2 ||
      !feedback.emaill.includes(".com") ||
      feedback.comment === ""
    ) {
      toast.error("Please fill in valid details.");
    } else {
      // dispatch(saveFeedback(feedback));
      setFeedback({ namee: "", emaill: "", comment: "", rating: 0 });

      // Add feedback data to Firestore collection
      // const userUid = userCredential && userCredential.uid;
      // addDoc(collection(db, "feedback"), {
      //   name: feedback.namee,
      //   email: feedback.emaill,
      //   feedback: feedback.comment,
      //   rating: feedback.rating,
      //   uid: userUid,
      // });

      toast.success("Your feedback has been successfully sent!");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        backgroundImage:
          'url("https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?w=740&t=st=1694160956~exp=1694161556~hmac=237187682149577fcabd9f4d1773426afa7b97bab8d9beedb47da73fe7022e08")',
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "70vh",
          backgroundSize: "cover",
        }}
      >
        <Card
          elevation={3}
          sx={{
            maxWidth: 500,
            maxHeight: "100vh",
            padding: "1rem",
            // marginTop: "-100px",
            // marginBottom: "40px",
            backgroundColor: "#e5e5e5",
            opacity: 0.9,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            !Write Us!
          </Typography>
          <CardContent>
            <form onSubmit={sendEmail}>
              <TextField
                type="text"
                name="name"
                variant="outlined"
                label="Name *"
                value={feedback.namee}
                onChange={(e) =>
                  setFeedback({ ...feedback, namee: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />
              <TextField
                type="email"
                name="user_email"
                variant="outlined"
                label="Email *"
                value={feedback.emaill}
                onChange={(e) =>
                  setFeedback({ ...feedback, emaill: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />
              <TextField
                multiline
                rows={4}
                name="message"
                variant="outlined"
                label="Message *"
                value={feedback.comment}
                onChange={(e) =>
                  setFeedback({ ...feedback, comment: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />
              <br />
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Your Rating</Typography>
                <Rating
                  name="simple-controlled"
                  value={feedback.rating}
                  onChange={(event, newValue) => {
                    if (newValue !== null) {
                      setFeedback({ ...feedback, rating: newValue });
                    }
                  }}
                />
              </Box>

              <Button
                variant="contained"
                onClick={sendFeedbackHandler}
                type="submit"
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default WriteUs;
