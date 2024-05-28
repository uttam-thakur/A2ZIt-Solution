// services.js

import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axios from "axios";

export const sendEmail = async (form: any) => {
  try {
    const res = await emailjs.sendForm(
      "service_mvq43kf",
      "template_25ybnov",
      form,
      "Nw7AxfQ-a0XQdVmy0"
    );
    toast.success("Your Message sent successfully!");
    return res;
  } catch (err) {
    console.error(err);
    toast.error("Failed to send email. Please try again.");
    throw err;
  }
};

export const submitFeedback = async (data: FormData) => {
  try {
    const response = await fetch(
      "https://hostapi-production-15e5.up.railway.app/api/feedback",
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to submit feedback: ${JSON.stringify(errorData)}`
      );
    }

    toast.success("Feedback submitted successfully!");
    return response.json();
  } catch (error) {
    console.error(error);
    toast.error("Failed to submit feedback. Please try again.");
    throw error;
  }
};

// Define an interface for the feedback data structure
interface Feedback {
  id: number;
  name: string;
  comment: string;
  image?: string;
}

export const getFeedbacks = async (): Promise<Feedback[]> => {
  try {
    const response = await axios.get(
      "https://hostapi-production-15e5.up.railway.app/api/feedback/all"
    );

    if (Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      console.error("API response is not an array:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch feedbacks:", error);
    throw error;
  }
};

//for product listing
// servicesApi.ts

export const fetchProducts = async () => {
  const apiUrl = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};
