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
import {
  MdMap,
  MdToggleOn,
  MdStorage,
  MdLayers,
  MdTextFields,
  MdAccessibilityNew,
  MdWarningAmber,
  MdArticle,
} from 'react-icons/md';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (Cambridge Dogs)");
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
              <Typography
                component="h2"
                id="modal-title"
                level="h3"
                fontWeight="xl"
              >
                Cambridge Dogs — Project Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
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
                <Box sx={{ color: 'white', mt: '2px' }}><MdMap size={18} /></Box>
                <Typography level="body-sm"><b>Purpose:</b> Visualize Cambridge neighborhoods and place a single, readable label inside each shape.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdToggleOn size={18} /></Box>
                <Typography level="body-sm"><b>Modes:</b> Toggle “Name” vs “Breed”; tooltip shows top three values.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdStorage size={18} /></Box>
                <Typography level="body-sm"><b>Data:</b> Local GeoJSON neighborhoods + CSV of dogs; source: Cambridge GIS FeatureServer.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>Stack:</b> Vite, ES modules, D3 v7, SVG textPath, CSS; topojson-client optional.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdTextFields size={18} /></Box>
                <Typography level="body-sm"><b>Labeling:</b> Custom centerline utility with centroid fallback and truncation.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAccessibilityNew size={18} /></Box>
                <Typography level="body-sm"><b>Accessibility:</b> Focusable paths, ARIA labels, live tooltip updates, high contrast, keyboard support.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdWarningAmber size={18} /></Box>
                <Typography level="body-sm"><b>Limitations:</b> Ties A→Z; very short centerlines use centroid; degenerate polygons may omit labels.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdArticle size={18} /></Box>
                <Typography level="body-sm"><b>Files:</b> index.html, src/main.js, src/utils/centerline.js, src/styles.css, src/data/*.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

export default function Dogs() {
  return (
    <div id="dogs">
    <TwoSidedLayout
      technologies={['Vite', 'JavaScript (ESM)', 'D3 v7', 'SVG', 'topojson-client', 'CSS', 'ArcGIS FeatureServer']}
      alt="Cambridge Dogs app (SVG map with curved labels)"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1757784784/samples/graphic_design_work/devProjects/dog_ouiyc0.jpg"
    >

      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Cambridge Dogs
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        Visualizing most frequent dog “Name” or most frequent “Breed” in each Cambridge, MA neighborhood on an interactive SVG map. Hover or tap a neighborhood to see the top three values. Built with Vite, D3 v7, and SVG textPath.
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://cambridge-dogs.vercel.app/"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Visit (Dogs)")}
      >
        Visit
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/cambridge_dogs"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (Dogs)")}
      >
        Repo
      </Button>
    </TwoSidedLayout>
      </div>
  );
}
