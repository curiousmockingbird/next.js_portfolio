/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
// import Link from '@mui/joy/Link';
import Typography from "@mui/joy/Typography";
import { MdArrowForward } from 'react-icons/md';
import TwoSidedLayout from "../components/TwoSidedLayout";
import { FaGithub } from 'react-icons/fa';
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
            maxWidth: 500,
            maxHeight: "85vh", // Set a maximum height for the modal
            overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h2"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            The solution involved:
          </Typography>
          <Typography id="modal-desc">
            <Typography level="h4">
              Chronological Ordering and Data Retrieval:
            </Typography>
            <br></br>Created a proxy server endpoint to securely fetch event
            data from the EveryAction API. The API response was then sorted by
            the startDate field, ensuring that events appear in chronological
            order and providing a clear sequence for users.
          </Typography>
          <br></br>
          <Typography id="modal-desc">
            <Typography level="h4">
              Pagination Logic:
            </Typography>
            <br></br>Implemented a pagination feature in the Vue.js component
            to control how many events are displayed at once. This included
            tracking the current page state, determining if more data was
            available, and appending new events incrementally to improve
            performance and user navigation.
          </Typography>
          <br></br>
          <Typography id="modal-desc">
            <Typography level="h4">Enhanced User Experience (UX):</Typography>
            <br></br>Included meaningful loading states, error handling, and
            minimal but informative styling. Buttons and text markers guide
            users through potential actions—such as viewing more events or
            retrying a failed data fetch—while preserving the overall flow of
            the page.
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

const logButtonClick = async (buttonName: string) => {
  try {
    await fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buttonName }),
    });
  } catch (error) {
    console.error("Error logging button click:", error);
  }
};

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
