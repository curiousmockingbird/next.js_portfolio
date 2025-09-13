/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import TwoSidedLayout from '../components/TwoSidedLayout';
import { FaGithub } from 'react-icons/fa';
// import Dialog from '../components/Dialog'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { MdQrCodeScanner, MdTableChart, MdAssignmentTurnedIn, MdSpeed, MdHourglassEmpty, MdEmail, MdVerified } from 'react-icons/md';

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
            maxWidth: { xs: 360, sm: 640, md: 760 },
            width: "100%",
            maxHeight: "85vh",
            overflow: "hidden",
            borderRadius: "lg",
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          {/* Header */}
          <Box
            sx={{
              px: 3,
              py: 2.25,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography component="h2" id="modal-title" level="h3" fontWeight="xl">
                Gala Ticketing System — Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              End‑to‑end flow: tickets, delivery, scanning, and check‑in updates.
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ p: 3, overflowY: 'auto' }} id="modal-desc">
            <Typography level="h4" sx={{ mb: 1 }}>Key Aspects</Typography>
            <Box
              component="ul"
              role="list"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 1.25,
              }}
            >
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdQrCodeScanner size={18} /></Box>
                <Typography level="body-sm"><b>QR scanning:</b> HTML5 QR library for fast, camera‑based scans on phones.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdAssignmentTurnedIn size={18} /></Box>
                <Typography level="body-sm"><b>Validation:</b> Apps Script parses IDs, checks status, and updates attendance.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdTableChart size={18} /></Box>
                <Typography level="body-sm"><b>Sheets:</b> Looks up across multiple tabs; robust column detection.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Efficiency:</b> Debounced scans prevent duplicates; smooth processing.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdHourglassEmpty size={18} /></Box>
                <Typography level="body-sm"><b>UX:</b> Clear success/error messages and a loading indicator.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdEmail size={18} /></Box>
                <Typography level="body-sm"><b>Delivery:</b> Tickets generated and emailed; reliable delivery pipeline.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdVerified size={18} /></Box>
                <Typography level="body-sm"><b>Integrity:</b> Prevents duplicate check‑ins; consistent state in Sheets.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

// logging handled via ../utils/logger as logButtonClick

export default function GalaTicketingSystem() {
  return (
    <TwoSidedLayout
      // box1logo="/qr.svg"
      // box2logo="/apps_script.svg"
      // box3logo="/sendgrid.svg"
      // box4logo="/EA.png"
      technologies={['HTML5 QR Code', 'Google Apps Script', 'sendrgrid']}
      alt="QR ticket (screenshot)"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1738809253/samples/graphic_design_work/devProjects/Gala_wh3xyo.jpg"
    >
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
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (QR generator)")}
      >
        Repo (QR generator)
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/QRscanner_for_gala"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (QR scanner)")}
      >
        Repo (QR scanner)
      </Button>
    </TwoSidedLayout>
  );
}
