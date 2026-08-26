"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submitFeedback } from "../services/services";
import Image from "next/image";
const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    comment: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", feedback.name);
    formData.append("comment", feedback.comment);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await submitFeedback(formData);
      setFeedback({ name: "", comment: "" });
      setSelectedImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          elevation={5}
          sx={{
            width: "100%",
            maxWidth: 600,
            padding: 3,
            borderRadius: 2,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Feedback
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="name"
                variant="outlined"
                label="Name *"
                value={feedback.name}
                onChange={(e) =>
                  setFeedback({ ...feedback, name: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />
              <TextField
                multiline
                rows={4}
                name="comment"
                variant="outlined"
                label="Comment *"
                value={feedback.comment}
                onChange={(e) =>
                  setFeedback({ ...feedback, comment: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />
              <div style={{ display: "flex", alignItems: "center",     margin: "16px 0"
 }}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ marginRight: 2 }}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                  <PhotoCamera />
                </IconButton>
              </div>
              {imagePreview && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  
                  <Image
                    src={imagePreview}
                    alt="Selected"
                    layout="fill"
                    objectFit="contain"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ padding: 1.5, marginTop: 2 }}
              >
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default FeedbackForm;
