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
import { MdMap, MdToggleOn, MdDonutLarge, MdColorLens, MdOpenWith, MdInfo, MdDarkMode } from 'react-icons/md';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (Zip3)");
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
                Contributions by Zip3 — Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Key aspects of the interactive choropleth and payment method views.
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
                <Box sx={{ color: 'white', mt: '2px' }}><MdDarkMode size={18} /></Box>
                <Typography level="body-sm"><b>UI:</b> Dark theme, high‑contrast typography, centered header, card layout.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdToggleOn size={18} /></Box>
                <Typography level="body-sm"><b>Modes:</b> Toggle between ZIP3 map and Payment Method donut chart.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdMap size={18} /></Box>
                <Typography level="body-sm"><b>Responsive SVG:</b> Dynamic viewBox adapts; taller aspect for portrait screens.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdColorLens size={18} /></Box>
                <Typography level="body-sm"><b>Colors:</b> Viridis for map (colorblind‑friendly); Tableau10 for payment methods.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>Tooltip:</b> Shows ZIP3/method, total, and share; clamped to container.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdOpenWith size={18} /></Box>
                <Typography level="body-sm"><b>Interaction:</b> Zoom and pan on the map; legend/UI remain fixed.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdDonutLarge size={18} /></Box>
                <Typography level="body-sm"><b>Donut View:</b> Payment method shares with categorical palette and legend.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

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
        onClick={() => logButtonClick("Visit (Zip3 contributions)")}
      >
        Visit
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
