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
import { MdCloud, MdSchedule, MdToggleOn, MdInfo, MdBolt, MdSecurity, MdLayers } from 'react-icons/md';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          logButtonClick("Learn More (EveryAction Events)");
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
                EveryAction Events — Details
              </Typography>
              <Chip size="sm" variant="soft" color="primary">Overview</Chip>
            </Box>
            <Typography level="body-sm" textColor="text.secondary">
              Key aspects of the event list integration, performance, and UX.
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
                <Typography level="body-sm"><b>Data retrieval:</b> Proxy server fetches events from EveryAction securely.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdSchedule size={18} /></Box>
                <Typography level="body-sm"><b>Ordering:</b> Results sorted by startDate for clear chronology.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdToggleOn size={18} /></Box>
                <Typography level="body-sm"><b>Pagination:</b> Page state and incremental loading for smoother browsing.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdBolt size={18} /></Box>
                <Typography level="body-sm"><b>Performance:</b> Appends new events efficiently without blocking UI.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdInfo size={18} /></Box>
                <Typography level="body-sm"><b>UX:</b> Loading, error states, and clear actions to view more or retry.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdSecurity size={18} /></Box>
                <Typography level="body-sm"><b>Security:</b> Keeps API credentials server-side and enforces request constraints.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, p: 1.25, borderRadius: 'sm', bgcolor: 'background.level1', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.solidColor', mt: '2px' }}><MdLayers size={18} /></Box>
                <Typography level="body-sm"><b>Stack:</b> Vue + TypeScript frontend, Node/Express proxy.</Typography>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

// logging handled via ../utils/logger as logButtonClick

export default function EveryActionEvents() {
  return (
    <div id="events-list">
    <TwoSidedLayout
      technologies={['Vue', 'typescript', 'EveryAction API', 'node.js', 'pagination']}
      alt="Event list component (screenshot)"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1739043867/samples/graphic_design_work/devProjects/Screenshot_2025-02-08_at_1.43.54_PM_rewlhb.png"
    >

      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Event List
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
      Implemented pagination in a Vue.js component that fetches event data from the EveryAction API via a proxy endpoint. Users can load and browse events in smaller, more manageable batches—improving both performance and user experience.{" "}
      </Typography>
      <BasicModal />
      <Button
        size="lg"
        component="a"
        href="https://vdlf.org/#event-list"
        target="_blank"
        startDecorator={<MdArrowForward size={35} />}
        onClick={() => logButtonClick("Deployment (Events)")}
      >
        Deployment
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/proxy_server"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (Proxy server)")}
      >
        Repo (Proxy server)
      </Button>
      <Button
        size="lg"
        component="a"
        href="https://github.com/curiousmockingbird/vdlf/blob/master/resources/scripts/components/EventListHome.vue"
        target="_blank"
        startDecorator={<FaGithub size={35} />}
        onClick={() => logButtonClick("Repo (EventList.vue)")}
      >
        Repo (Event List component)
      </Button>
    </TwoSidedLayout>
      </div>
  );
}
