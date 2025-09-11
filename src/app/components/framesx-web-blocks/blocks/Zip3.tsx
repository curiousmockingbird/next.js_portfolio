/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import { MdArrowForward } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
import { FaGithub } from 'react-icons/fa';
// import Dialog from '../components/Dialog'
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (EveryAction Events)");
        }}
      >
        Learn More
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            maxHeight: "85vh", // Set a maximum height for the modal
            overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography id="modal-desc">
            <Typography level="h4">
              UI/UX:
            </Typography>
            <br></br>
    Dark theme with high‑contrast typography, centered header, and card layout.
    Two visualization modes with a toggle: ZIP3 map and Payment Method donut.
    Responsive SVG via dynamic viewBox; adjusts for portrait/smaller screens to a taller aspect ratio (better vertical fit).
    Colorblind‑friendly Viridis scale for the map; Tableau10 categorical palette for methods.
    Hover tooltip shows ZIP3/method, total, and share of overall contributions; tooltip is clamped within the container.
    Zoom and pan on the map layer; legend/UI remain fixed for readability.

          </Typography>
          
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

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

export default function Zip3() {
  return (
    <div id="zip3">
    <TwoSidedLayout
      technologies={['D3.js', 'Vite', 'Choropleth Map', 'Data Visualization']}
      alt="Event list component (screenshot)"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1757557732/samples/graphic_design_work/devProjects/Screenshot_2025-09-10_at_10.27.26_PM_gvjul6.png"
    >

      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Contributions by Zip3
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
      Single‑page visualization focused on contributions with two interactive views: ZIP3 choropleth (default) for spatial distribution across Wisconsin ZIP3 regions & Payment Method view (donut chart) showing share of total by payment type
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://vdlf.org/contribution-map/"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Deployment (Zip3 contributions)")}
      >
        Deployment
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/zip3-contributions"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (Zip3 contributions)")}
      >
        Repo
      </Button>
    </TwoSidedLayout>
      </div>
  );
}
