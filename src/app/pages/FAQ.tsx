import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { faqData } from "../common/constant";
import styles from "../style/FAQ.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const FAQ: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<{
    question: string;
    answer: string;
  }>({
    question: "",
    answer: "",
  });

  return (
    <div className={styles.faq}>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={styles.faqCard}
            onClick={() => {
              setSelectedData({ question: faq.question, answer: faq.answer });
              setFaqOpen(true);
            }}
          >
            <HelpOutlineIcon className={styles.faqCardIcon} />
            <div className={styles.faqCardSummary}>{faq.question}</div>
          </div>
        ))}
      </div>

      <Modal open={faqOpen} onClose={() => setFaqOpen(false)}>
        <div
          className={styles.faqModal}
          // sx={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          //   bgcolor: "background.paper",
          //   boxShadow: 24,
          //   p: 4,
          //   borderRadius: "10px",
          //   width: "90%",
          //   maxWidth: "500px",
          // }}
        >
          <IconButton
            onClick={() => setFaqOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <div className={styles.questionSection}>
            <h1 className={styles.faqModalQuestion}>{selectedData.question}</h1>
          </div>
          <p className={styles.faqModalAnswer}>{selectedData.answer}</p>
        </div>
      </Modal>
    </div>
  );
};

export default FAQ;
