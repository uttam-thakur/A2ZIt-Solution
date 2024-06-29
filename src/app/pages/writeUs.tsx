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
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../services/services";
const WriteUs: React.FC = () => {
  const [feedback, setFeedback] = useState({
    namee: "",
    emaill: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendEmail(e.currentTarget);
      setFeedback({ namee: "", emaill: "", comment: "" });
    } catch (err) {
      console.error(err);
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
          backgroundSize: "cover",
        }}
      >
        <Card
          elevation={3}
          sx={{
            maxWidth: 500,
            maxHeight: "100vh",
            padding: "1rem",

            backgroundColor: "#e5e5e5",
            opacity: 0.9,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            !Write Us!!
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
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
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button variant="contained" type="submit">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default WriteUs;
