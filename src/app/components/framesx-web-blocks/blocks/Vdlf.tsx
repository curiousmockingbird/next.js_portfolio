/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { MdArrowForward } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
import { FaGithub } from 'react-icons/fa';
// import Dialog from '../components/Dialog'
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { MdCloud, MdEmail, MdSecurity, MdWeb, MdErrorOutline, MdInfo } from 'react-icons/md';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          logButtonClick("Learn more");
          setOpen(true);
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
                Contact Form Integration — Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Key aspects of the serverless email handler and frontend wiring.
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
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Serverless API:</b> Vercel function handles submissions and secrets via env vars.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdEmail size={18} /></Box>
                <Typography level="body-sm"><b>Email delivery:</b> Nodemailer setup with templated messages and basic validation.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdSecurity size={18} /></Box>
                <Typography level="body-sm"><b>CORS:</b> Custom middleware to allow the WordPress origin and block others.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdWeb size={18} /></Box>
                <Typography level="body-sm"><b>Frontend:</b> Vue contact form posts JSON; payload shape aligned with API.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdErrorOutline size={18} /></Box>
                <Typography level="body-sm"><b>Error handling:</b> User‑friendly messages and retries on transient failures.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>DX/ops:</b> Minimal config, clear logs, and simple local testing.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

export default function Vdlf() {
  return (
    <TwoSidedLayout
      technologies={['Vue', 'typescript', 'Vercel', 'node.js', 'CORS', 'API']}
      alt="Contact form screenshot"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1730684442/samples/graphic_design_work/devProjects/Screenshot_2024-11-03_at_7.39.08_PM_h8wohn.png"
    >
      {/* <Typography color="primary" fontSize="lg" fontWeight="lg">
        vdlf.org/team
      </Typography> */}
      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Contact Form Integration
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        A Node.js serverless function hosted on Vercel to handle contact form
        submissions from a WordPress frontend built with Vue.js.{" "}
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://vdlf.org/team"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Deployment (form)")}
      >
        Deployment
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/vdlf/blob/master/resources/scripts/components/StaffBoard.vue"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (form)")}
      >
        Repo (Vue.js form)
      </Button>

      <Button
        size="lg"
        component="a"
        href="https://github.com/harold-voces/contact_form_last"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (serverless function)")}
      >
        Repo (serverless function)
      </Button>
    </TwoSidedLayout>
  );
}
