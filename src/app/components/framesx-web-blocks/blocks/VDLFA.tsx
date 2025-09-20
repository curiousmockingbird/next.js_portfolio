/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { MdArrowForward, MdHandyman, MdWeb, MdSpeed, MdAccessibilityNew, MdCloud, MdSecurity, MdLayers, MdInfo } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
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
          logButtonClick("Learn More (VDLFA)");
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
                VDLFA — Project Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Revamp focused on a modern, fast, and accessible experience with an editor‑friendly workflow.
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
                <Box sx={{ color: 'white', mt: '2px' }}><MdWeb size={18} /></Box>
                <Typography level="body-sm"><b>Frontend:</b> Custom WordPress theme + Vue/TS components (events, forms, UI widgets).</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Performance:</b> Optimized media, code‑splitting, and lazy assets; faster LCP.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAccessibilityNew size={18} /></Box>
                <Typography level="body-sm"><b>Accessibility:</b> WCAG‑aligned semantics, focus order, and contrast improvements.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Integrations:</b> Serverless form handling on Vercel; secure proxy for external APIs.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSecurity size={18} /></Box>
                <Typography level="body-sm"><b>Security:</b> CORS rules, input validation, and safe API boundaries.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>Design system:</b> Reusable components, spacing/typography tokens, consistent breakpoints.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>Editor UX:</b> Clear templates and content blocks for non‑technical updates.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

export default function Vdlfa() {
  return (
    <TwoSidedLayout
      technologies={['WordPress', 'Vue', 'typescript', 'Vercel', 'node.js', 'Figma']}
      alt="Contact form screenshot"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1758403239/samples/graphic_design_work/devProjects/Screenshot_2025-09-20_at_4.18.52_PM_swdxz2.png"
    >

      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Website revamping
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
      Led the front-end development for the Voces de la Frontera Action website revamp, collaborating with a development team to create a modern, responsive, and user-friendly interface.{" "}
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://vdlfa.org"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Deployment (Vdlfa)")}
      >
        Deployment
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://www.figma.com/design/5urnCwdh6PiW4S5JF4trd9/VDLFA?node-id=1-2&p=f"
        target="_blank"
        startDecorator={<MdHandyman size={35} />}
        onClick={() => logButtonClick("Prototype (Figma)")}
      >
        Prototype (Figma)
      </Button>
    </TwoSidedLayout>
  );
}
