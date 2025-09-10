/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import { MdArrowForward } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
// import { FaGithub } from 'react-icons/fa';
// import Dialog from '../components/Dialog'
// import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
// import Sheet from "@mui/joy/Sheet";

// const BasicModal: React.FC = () => {
//   const [open, setOpen] = React.useState<boolean>(false);
//   return (
//     <React.Fragment>
//       <Button
//         variant="outlined"
//         color="neutral"
//         onClick={() => {
//           logButtonClick("Learn more");
//           setOpen(true);
//         }}
//       >
//         Learn More
//       </Button>
//       <Modal
//         aria-labelledby="modal-title"
//         aria-describedby="modal-desc"
//         open={open}
//         onClose={() => setOpen(false)}
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         <Sheet
//           variant="outlined"
//           sx={{
//             maxWidth: 500,
//             borderRadius: "md",
//             p: 3,
//             boxShadow: "lg",
//           }}
//         >
//           <ModalClose variant="plain" sx={{ m: 1 }} />
//           <Typography
//             component="h2"
//             id="modal-title"
//             level="h2"
//             textColor="inherit"
//             fontWeight="lg"
//             mb={1}
//           >
//             The solution involved:
//           </Typography>
//           <Typography id="modal-desc">
//             <Typography level="h4">Serverless Function Setup:</Typography>
//             <br></br>Developed a serverless API endpoint using Vercel to send
//             emails via Nodemailer. This allowed a seamless communication channel
//             between the site visitors and the organization’s team members.
//           </Typography>
//           <br></br>
//           <Typography id="modal-desc">
//             <Typography level="h4">
//               Cross-Origin Resource Sharing (CORS) Configuration:
//             </Typography>
//             <br></br>Implemented proper CORS handling to ensure secure and
//             successful API requests from the WordPress site to the Vercel-hosted
//             backend. Utilized custom CORS middleware for flexibility and
//             consistency across requests.
//           </Typography>
//           <br></br>
//           <Typography id="modal-desc">
//             <Typography level="h4">Frontend Integration:</Typography>
//             <br></br>Modified the Vue.js contact form on the WordPress site to
//             interact with the Vercel API, ensuring the payload structure matched
//             and implementing error handling for smoother user experience.
//           </Typography>
//         </Sheet>
//       </Modal>
//     </React.Fragment>
//   );
// };

const logButtonClick = async (buttonName: string) => {
  try {
    await fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buttonName }),
    });
  } catch (error) {
    console.error("Error logging button click:", error);
  }
};

export default function Nombolo() {
  return (
    <TwoSidedLayout
      technologies={['React Native', 'typescript', 'AWS', 'node.js', 'mongodb', 'expo']}
      alt="Contact form screenshot"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1757461943/samples/graphic_design_work/devProjects/Screenshot_2025-09-09_at_7.51.10_PM_dvnjph.png"
    >

      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Social App (React Developer Intern)
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        Mobile application built with React Native, implementing interactive UI components and optimizing performance for seamless user experience{" "}
      </Typography>
      {/* <BasicModal /> */}
      <Button
        size="lg"
        component="a"
        href="https://nombolo.com/"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("View (Nombolo)")}
      >
        View
      </Button>

    </TwoSidedLayout>
  );
}
