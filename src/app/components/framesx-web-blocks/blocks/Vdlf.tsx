/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import GitHubIcon from '@mui/icons-material/GitHub';
import Dialog from '../components/Dialog'

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
      {/* <Button size='lg' component="a" href="https://github.com/curiousmockingbird/my_graphic_design_portfolio" startDecorator={<GitHubIcon fontSize="large" />}>
      Github repo
      </Button> */}
      {/* <Typography>
        Already a member? <Link fontWeight="lg">Sign in</Link>
      </Typography> */}
      <Dialog/>
    </TwoSidedLayout>
  );
}
