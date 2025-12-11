/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { MdArrowForward, MdWeb, MdSpeed, MdAccessibilityNew, MdCloud, MdSecurity, MdLayers, MdInfo } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
// import Dialog from '../components/Dialog'
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
// import { FaGithub } from 'react-icons/fa';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (Cubuntu)");
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
                Cubuntu Technical Overview
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Stack</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Architecture, platform choices, and implementation details for the Cubuntu app.
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
                <Box sx={{ color: 'white', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>Framework + Runtime:</b> Next.js (App Router) with server and client components; Node.js route handlers; TypeScript throughout.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdWeb size={18} /></Box>
                <Typography level="body-sm"><b>UI + Styling:</b> Tailwind CSS v4 with @tailwindcss/postcss; design tokens via @theme in app/globals.css; component overrides for react-h5-audio-player.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSecurity size={18} /></Box>
                <Typography level="body-sm"><b>Auth + Users:</b> next-auth (JWT sessions) with Credentials & Google providers; Prisma Adapter; custom signup verification and password reset flows.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Database + ORM:</b> PostgreSQL via Prisma; models: User, Account, Session, VerificationToken, Comment (threaded replies).</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Realtime + Data Fetching:</b> Pusher Channels for live comments (server triggers + pusher-js) and TanStack React Query for caching/mutations.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>APIs + Backend:</b> Next.js Route Handlers under app/api/* for register-verify, reset/forgot password, comments CRUD + realtime triggers, users/checks, and RSS from local JSON.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

export default function Cubuntu() {
  return (
    <div id="cubuntu">
    <TwoSidedLayout
      technologies={[
        "tailwindcss",
        "Next.js",
        "typescript",
        "Vercel",
        "node.js",
        "Prisma",
      ]}
      alt="Modern web page management UI"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1765401291/samples/graphic_design_work/devProjects/Screenshot_2025-12-10_at_4.14.19_PM_prkg9q.png"
    >
      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Cubuntu
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        Full-featured podcast web app & community platform for Cubans to dream for a
        better future for their country. The app includes user authentication, an RSS feed endpoint for
        podcast syndication, and Git LFS integration to efficiently track and version large audio files.
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://cubuntu.org"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Visit (Cubuntu)")}
      >
        Visit
      </Button>
      {/* <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/vdlf"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Prototype (Figma)")}
      >
        Theme repo
      </Button> */}
    </TwoSidedLayout>
  </div>
  );
}
