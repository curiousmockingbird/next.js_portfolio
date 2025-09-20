/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { MdArrowForward, MdWeb, MdSpeed, MdAccessibilityNew, MdCloud, MdAnalytics, MdInfo } from 'react-icons/md';
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
          logButtonClick("Learn More (SalesRoads)");
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
                SalesRoads — Project Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Marketing site improvements: landing pages, performance, accessibility, and lead capture.
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
                <Typography level="body-sm"><b>Frontend:</b> WordPress customizations for landing pages, CTAs, and forms.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdSpeed size={18} /></Box>
                <Typography level="body-sm"><b>Performance:</b> Asset optimization and image sizing to improve page speed.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAccessibilityNew size={18} /></Box>
                <Typography level="body-sm"><b>Accessibility:</b> Clear headings, focus states, and color contrast.
                </Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdCloud size={18} /></Box>
                <Typography level="body-sm"><b>Integrations:</b> Form providers + analytics tags; consolidated tracking setup.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdAnalytics size={18} /></Box>
                <Typography level="body-sm"><b>Lead capture:</b> Optimized forms and funnels, with event tracking.
                </Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'white', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>Process:</b> Iterated with stakeholders; measured impact and refined content.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

// logging handled via ../utils/logger as logButtonClick

export default function SalesRoads() {
  return (
    <div id='sales-roads'>
      
    <ForWordPress
      alt="Screenshot of homepage of Big Lake Data"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1758411416/samples/graphic_design_work/devProjects/Screenshot_2025-09-20_at_6.36.37_PM_etvy6c.png"
    >
      {/* <Typography color="primary" fontSize="lg" fontWeight="lg">
      salesroads.com
      </Typography> */}
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        lineHeight="2.5rem"
      >
        Sales Outsourcing Agency
      </Typography>
      <BasicModal />
      <Button size='lg' component="a" href="https://salesroads.com/" target="_blank" startDecorator={<MdArrowForward size={35} />} onClick={() => logButtonClick("Visit (SalesRoads)")}> 
        Deployment
      </Button>
    </ForWordPress>
    </div>
  );
}
