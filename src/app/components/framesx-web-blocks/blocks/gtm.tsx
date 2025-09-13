/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { logBlockClick as logButtonClick } from "../utils/logger";
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { MdArrowForward } from 'react-icons/md';
import ForWordPress from '../components/ForWordPress';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Learn more
      </Button> */}
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
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Technologies used:
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>Image Management:</Typography> Cloudinary
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>React Tools:</Typography> TanStack
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>HTTP Client Libraries:</Typography> Axios
          </Typography>

        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

// logging handled via ../utils/logger as logButtonClick

export default function gtm() {
  return (
    <ForWordPress
      alt="Screenshot of homepage of Big Lake Data"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1740850093/samples/graphic_design_work/devProjects/gtm.png"
    >
      
      {/* <Typography color="primary" fontSize="lg" fontWeight="lg">
      gtmdifferent.com
      </Typography> */}
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        lineHeight="2.5rem"
      >
        Content Tank Platform
      </Typography>
      <BasicModal />
      <Button size='lg' component="a" href="https://gtmdifferent.com/" target="_blank" startDecorator={<MdArrowForward size={35} />} onClick={() => logButtonClick("Visit (BLD)")}> 
        Visit
      </Button>
      <Button size='sm' >
        Technology: Wordpress
      </Button>
    </ForWordPress>
  );
}
