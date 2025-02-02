// import React, { useState } from "react";
// // import { BsQuestionSquare } from "react-icons/bs";
// import styles from "../style/FAQ.module.css";
// import { faqData } from "../common/constant";
// import PortalModal from "../component/common-components/Modal";
// import { log } from "console";

// const FAQ: React.FC = () => {
//   const [faqOpen, setFaqOpen] = useState(false);
//   const [SelectedData, setSelectedData] = useState({
//     question: "",
//     answer: "",
//   });

//   return (
//     <div className={styles.faq}>
//       <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
//       <div className={styles.faqSection}>
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={styles.faqCard}
//             onClick={() => {
//               setSelectedData({ question: faq.question, answer: faq.answer });
//               setFaqOpen(true);
//             }}
//           >
//             {/* <BsQuestionSquare className={styles.faqCardIcon} /> */}
//             <div className={styles.faqCardSummary}>{faq.question}</div>
//           </div>
//         ))}
//       </div>
//       <PortalModal
//         open={faqOpen}
//         onBackdropClick={() => {
//           setFaqOpen(false);
//         }}
//       >
//         <div className={styles.faqModal}>
//           <button
//             onClick={() => {
//               setFaqOpen(false);
//             }}
//             className={styles.close}
//           >
//             X
//           </button>

//           <div className={styles.questionSection}>
//             {/* <BsQuestionSquare className={styles.faqCardIcon} /> */}
//             <h1 className={styles.faqModalQuestion}>
//               {SelectedData?.question}
//             </h1>
//           </div>
//           <h1 className={styles.faqModalAnswer}>{SelectedData?.answer}</h1>
//         </div>
//       </PortalModal>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import styles from "../style/FAQ.module.css";
import { faqData } from "../common/constant";

const FAQ: React.FC = () => {
  const [selectedData, setSelectedData] = useState<{
    question: string;
    answer: string;
  } | null>(null);

  return (
    <div className={styles.faq}>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={styles.faqCard}
            onClick={() => setSelectedData(faq)}
          >
            <div className={styles.faqCardSummary}>{faq.question}</div>
          </div>
        ))}
      </div>

      {/* Show the selected question-answer below the list */}
      {selectedData && (
        <div className={styles.faqModal}>
          <button
            onClick={() => setSelectedData(null)}
            className={styles.close}
          >
            X
          </button>

          <div className={styles.questionSection}>
            <h1 className={styles.faqModalQuestion}>{selectedData.question}</h1>
          </div>
          <h1 className={styles.faqModalAnswer}>{selectedData.answer}</h1>
        </div>
      )}
    </div>
  );
};

export default FAQ;
