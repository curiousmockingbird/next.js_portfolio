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

export default function HarolDesigner() {
  return (
    <TwoSidedLayout
      box1logo="/next-js.svg"
      box2logo="/tan_stack.png"
      box3logo="/sendgrid.svg"
      box4logo="/node.png"
      alt="Image of Graphic Design Portfolio"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1712663883/samples/graphic_design_work/devProjects/Screenshot_2024-04-09_at_6.57.05_AM_fiz3qo.png"
    >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        harolDesigner.art
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        lineHeight="2.5rem"
      >
        Graphic Design Portfolio
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        A dynamic showcase built with Next.js. This portfolio highlights my work in various graphic design areas. I used libraries like Cloudinary, TanStack, and NodeMailer to provide an engaging user experience.
      </Typography>
      <BasicModal />
      <Button size='lg' component="a" href="https://www.haroldesigner.art/" target="_blank" startDecorator={<ArrowForward fontSize='large' />} onClick={() => logButtonClick("Deployment (GD Portfolio)")}>
        Deployment
      </Button>
      <Button size='lg' component="a" href="https://github.com/curiousmockingbird/my_graphic_design_portfolio" target="_blank" startDecorator={<GitHubIcon fontSize="large"/>} onClick={() => logButtonClick("Repo (GD Portfolio)")}>
        Github repo
      </Button>
    </TwoSidedLayout>
  );
}
