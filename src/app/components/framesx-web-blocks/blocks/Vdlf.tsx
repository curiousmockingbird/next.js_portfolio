/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Dialog from '../components/Dialog'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

const BasicModal: React.FC = () =>{
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Technologies used
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
            <Typography level='h4'>Analytics and Tracking:</Typography> Google Analytics
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>WordPress plugins & features:</Typography> Elementor, YOAST
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>Axios:</Typography> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

export default function Vdlf() {
  return (
    <TwoSidedLayout 
    img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1712678845/samples/graphic_design_work/devProjects/Screenshot_2024-04-09_at_11.07.06_AM_mj1mkq.png"
    >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        vdlf.org
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Wisconsin’s leading grassroots immigrant rights organization
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        Integrating various WordPress plugins to enhance functionality, such as event management, multilingual support, donation processing, and SEO optimization.
      </Typography>
      <Button size='lg' component="a" href="https://www.vdlf.org/" startDecorator={<ArrowForward fontSize='large' />}>
      Visit!
      </Button>
      <BasicModal/>
    </TwoSidedLayout>
  );
}
