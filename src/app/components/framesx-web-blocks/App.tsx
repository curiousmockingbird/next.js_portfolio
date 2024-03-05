import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from '@mui/joy/Link';
// import Dialog from './components/Dialog'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import framesxTheme from './theme';
import HeroLeft01 from './blocks/HeroLeft01';
import HeroLeft02 from './blocks/HeroLeft02';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'dark') {
          setMode('light');
        } else {
          setMode('dark');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'dark' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
    <Typography
    level="body-xs"
    sx={{
    position: 'fixed',
    zIndex: 999,
    top: '2rem',
    left: '1rem',
    }}
  >
    <Link href={'/'}> <ArrowBack sx={{ fontSize: 40 }} /> </Link>
  </Typography>
    </>
  );
}

export default function TeamExample() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = [
    <HeroLeft01 key="HeroLeft01" />,
    <HeroLeft02 key="HeroLeft02" />,
    // Add more components as needed, each with a unique key
  ];  
  const handleScroll = (e:React.UIEvent<HTMLElement>) => {
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
          right: '10px',
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
              margin: '4px 0',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </CssVarsProvider>
  );
}
