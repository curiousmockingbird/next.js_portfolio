/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import GitHubIcon from '@mui/icons-material/GitHub';
// import Dialog from '../components/Dialog'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (Gala Ticketing System)");
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
          <Typography
            component="h2"
            id="modal-title"
            level="h2"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            The solution involved:
          </Typography>
          <Typography id="modal-desc">
            <Typography level="h4">QR Code Scanning Interface:</Typography>
            <br></br>Integrated the HTML5 QR Code library to enable seamless,
            camera-based QR code scanning from a phone. The goal was to allow
            attendees to conveniently present their QR codes for quick scanning
            and check-in.
          </Typography>
          <br></br>
          <Typography id="modal-desc">
            <Typography level="h4">
              Data Processing and Validation with Google Apps Script:
            </Typography>
            <br></br>Developed server-side functions in Google Apps Script to
            extract and validate ticket IDs directly from QR codes. The script
            accessed Google Sheets to match each scanned ticket ID, checked the
            attendee&apos;s status, and updated the &quot;Attendance&quot; field
            upon check-in.
          </Typography>
          <br></br>
          <Typography id="modal-desc">
            <Typography level="h4">Optimizing Code for Efficiency:</Typography>
            <br></br>Implemented debouncing to prevent multiple executions
            during rapid QR code scans and modified the script to dynamically
            search for ticket ID and attendance columns across multiple sheets
            within the Google Sheets document, enhancing scalability
          </Typography>
          <br></br>
          <Typography id="modal-desc">
            <Typography level="h4">User Experience (UX):</Typography>
            <br></br>Added visual indicators, such as success and error
            messages, along with a loading spinner during data processing.
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

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

export default function GalaTicketingSystem() {
  return (
    <TwoSidedLayout
      id="gala-ticketing-system"
      box1logo="/qr.svg"
      box2logo="/apps_script.svg"
      box3logo="/sendgrid.svg"
      box4logo="/EA.png"
      alt="QR ticket (screenshot)"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1738809253/samples/graphic_design_work/devProjects/Gala_wh3xyo.jpg"
    >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Voces de la Frontera Annual Gala 2024
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Event Registration System
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
      Registration system to streamline the check-in process at an event using QR codes. I developed the entire event ticketing system, including ticket generation, successful delivery, and QR code scanning app for check-in.      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/QRgenerator_for_gala"
        target="_blank"
        startDecorator={<GitHubIcon fontSize="large" />}
        onClick={() => logButtonClick("Repo (QR generator)")}
      >
        Repo (QR generator)
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/QRscanner_for_gala"
        target="_blank"
        startDecorator={<GitHubIcon fontSize="large" />}
        onClick={() => logButtonClick("Repo (QR scanner)")}
      >
        Repo (QR scanner)
      </Button>
    </TwoSidedLayout>
  );
}
