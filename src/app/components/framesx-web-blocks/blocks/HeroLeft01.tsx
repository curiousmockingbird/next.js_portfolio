/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout 
    img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1705882205/samples/graphic_design_work/devProjects/Screenshot_2024-01-21_at_6.09.04_PM_bj2omh.png"
    >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        harolDesiger.art
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Graphic Design Portfolio
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      a dynamic showcase built with Next.js. This portfolio highlights my work in various graphic design areas. leveraging the latest tools and libraries to provide an engaging user experience.
      </Typography>
      <Button size='lg' component="a" href="#as-link" startDecorator={<ArrowForward fontSize='large' />}>
      Open in new tab
      </Button>
      <Button size='lg' component="a" href="https://github.com/curiousmockingbird/my_graphic_design_portfolio" startDecorator={<GitHubIcon fontSize="large" />}>
      Github repo
      </Button>
      <Typography>
        Already a member? <Link fontWeight="lg">Sign in</Link>
      </Typography>
    </TwoSidedLayout>
  );
}
