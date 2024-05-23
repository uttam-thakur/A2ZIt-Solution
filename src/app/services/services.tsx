// services.js

import emailjs from "emailjs-com";
import { toast } from "react-toastify";

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
