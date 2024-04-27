/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import GitHubIcon from '@mui/icons-material/GitHub';
import Dialog from '../components/Dialog'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

const BasicModal: React.FC = () => {
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


export default function HarolDesigner() {
  return (
    <TwoSidedLayout
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1712663883/samples/graphic_design_work/devProjects/Screenshot_2024-04-09_at_6.57.05_AM_fiz3qo.png"
    >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        harolDesigner.art
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Graphic Design Portfolio
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        A dynamic showcase built with Next.js. This portfolio highlights my work in various graphic design areas. I used libraries like Cloudinary, TanStack, and NodeMailer to provide an engaging user experience.
      </Typography>
      <Button size='lg' component="a" href="https://www.haroldesigner.art/" startDecorator={<ArrowForward fontSize='large' />}>
        Visit!
      </Button>
      <Button size='lg' component="a" href="https://github.com/curiousmockingbird/my_graphic_design_portfolio" startDecorator={<GitHubIcon fontSize="large" />}>
        Github repo
      </Button>
      {/* <Typography>
        Already a member? <Link fontWeight="lg">Sign in</Link>
      </Typography> */}
      <BasicModal />
    </TwoSidedLayout>
  );
}
