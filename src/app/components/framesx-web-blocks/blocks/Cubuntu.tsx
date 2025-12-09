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
import { FaGithub } from 'react-icons/fa';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (WebMgmt)");
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
                Modern Web Page Management
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              A framework for fast, accessible, and editor‑friendly websites with clear governance and reliable delivery.
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
                <Typography level="body-sm"><b>Content model:</b> Block‑based pages and reusable templates in WordPress or headless CMS.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Performance:</b> Core Web Vitals budgets, image/CDN optimization, SSR/ISR, and lazy assets.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAccessibilityNew size={18} /></Box>
                <Typography level="body-sm"><b>Accessibility:</b> WCAG‑aligned structure, keyboard flows, focus management, and contrast.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Delivery:</b> CI/CD with preview links, serverless workflows, and edge caching.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSecurity size={18} /></Box>
                <Typography level="body-sm"><b>Governance:</b> Role‑based access, approvals, audit logs, and safe API boundaries.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>Design system:</b> Component library with tokens, responsive rules, and editorial guardrails.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>Editor UX:</b> Guided blocks, content templates, and staging → review → publish flows.</Typography>
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
    <TwoSidedLayout
      technologies={['WordPress', 'Vue', 'typescript', 'Vercel', 'node.js', 'Figma']}
      alt="Modern web page management UI"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1763141462/samples/graphic_design_work/devProjects/Screenshot_2025-11-14_at_12.29.51_PM_nkauh7.png"
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
        Helping non‑technical teams publish quickly without sacrificing performance, accessibility, or brand consistency — combining a flexible content model, a component‑driven UI, and CI/CD for safe, repeatable releases.
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://cubuntu.org"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Deployment (Cubuntu)")}
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
  );
}
