/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { MdArrowForward, MdWeb, MdSpeed, MdAccessibilityNew, MdInfo, MdCloud, MdLayers } from 'react-icons/md';
import ForWordPress from '../components/ForWordPress';
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
          logButtonClick("Learn More (Big Lake Data)");
        }}
      >
        Learn More
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: { xs: 360, sm: 640, md: 760 },
            width: '100%',
            maxHeight: '85vh',
            overflow: 'hidden',
            borderRadius: 'lg',
            boxShadow: 'lg',
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
                Big Lake Data — Project Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Marketing site for an analytics team; clean IA, performance, and accessibility.
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
                <Typography level="body-sm"><b>CMS:</b> Squarespace customization with consistent sections and typography.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>IA/content:</b> Structured pages for services, team, and contact funnels.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Performance:</b> Optimized images and assets; fast, lightweight pages.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAccessibilityNew size={18} /></Box>
                <Typography level="body-sm"><b>Accessibility:</b> Clear heading order, contrast, and keyboard focus.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Integrations:</b> Forms and analytics hooks (GA/Search Console) where applicable.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>Brand:</b> Consistent visual style aligned with an analytics audience.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

// logging handled via ../utils/logger as logButtonClick

export default function BigLake() {
  return (
    <div id='big-lake-data'>
    <ForWordPress
      alt="Screenshot of homepage of Big Lake Data"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1755880583/samples/graphic_design_work/devProjects/Screenshot_2025-08-22_at_12.35.41_PM_grebwk.png"
    >
      {/* <Typography color="primary" fontSize="lg" fontWeight="lg">
      biglakedata.com
      </Typography> */}
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        lineHeight="2.5rem"
      >
        Milwaukee-based Analytics Team
      </Typography>
      <BasicModal />
      <Button size='lg' component="a" href="https://www.biglakedata.com/" target="_blank" startDecorator={<MdArrowForward size={35} />} onClick={() => logButtonClick("Visit (BLD)")}> 
        Deployment
      </Button>
    </ForWordPress>
    </div>
  );
}
