import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from '@mui/joy/Link';
// import Toggle from './components/Toggle'

import framesxTheme from './theme';
import Project01 from './blocks/Vdlf';
import Project02 from './blocks/GalaTicketingSystem';
import Project03 from './blocks/HarolDesigner';
import Project04 from './blocks/EveryActionEvents';
import Project05 from './blocks/TreySavage';
import Project06 from './blocks/BigLakeData';
import Project07 from './blocks/SalesRaods';
import Project08 from './blocks/gtm';
import Project09 from './blocks/VDLFA'

function ColorSchemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
    {/* <Toggle/> */}
      <Typography
        level="body-xs"
        className="fixed z-50 top-8 left-8 lg:left-16" // Adjusted classes based on Tailwind's scale
      >
        <Link href={'/'}> <ArrowBack sx={{ fontSize: 40 }} /> </Link>
      </Typography>
    </>
  );
}

export default function TeamExample() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = [
    <Project01 key="Project01" />,
    <Project04 key="Project04" />,
    <Project02 key="Project02" />,
    <Project09 key="Project09" />,
    <Project03 key="Project03" />,
    <Project05 key="Project05" />,
    <Project06 key="Project06"/>,
    <Project07 key="Project07"/>,
    <Project08 key="Project08"/>,
    // Add more components as needed, each with a unique key
  ];
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight } = e.currentTarget;
    const pageIndex = Math.round(scrollTop / clientHeight);
    setCurrentPage(pageIndex);
  };

  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme} defaultMode='dark'>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
        onScroll={handleScroll}
      >
        {pages}
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: '40px',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {pages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              bgcolor: currentPage === index ? '#3ab7bf' : '#fb923c',
              borderRadius: '50%',
              margin: '8px 0',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </CssVarsProvider>
  );
}
