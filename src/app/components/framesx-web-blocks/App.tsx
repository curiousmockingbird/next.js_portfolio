'use client'
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { MdArrowBack } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "@mui/joy/Link";
import { logFromApp } from "./utils/logger";
// import Toggle from './components/Toggle'

import framesxTheme from "./theme";
import Project01 from "./blocks/Vdlf";
import Project02 from "./blocks/GalaTicketingSystem";
import Project03 from "./blocks/HarolDesigner";
import Project04 from "./blocks/EveryActionEvents";
import Project05 from "./blocks/TreySavage";
import Project06 from "./blocks/BigLakeData";
import Project07 from "./blocks/SalesRaods";
import Project08 from "./blocks/gtm";
import Project09 from "./blocks/VDLFA";
import Project10 from "./blocks/Nombolo";
import Project11 from "./blocks/Zip3";
import Project12 from "./blocks/Dogs";

function HomeButton() {
  return (
    <Box
      sx={{ position: 'fixed', top: 16, left: { xs: 12, sm: 16, md: 24 }, zIndex: 30 }}
    >
      <Tooltip title="Home" variant="soft" placement="right">
        <Link href="/" aria-label="Go to home">
          <IconButton
            variant="soft"
            color="neutral"
            size="lg"
            sx={{ borderRadius: '50%' }}
            onClick={() => logFromApp('Home')}
          >
            <MdArrowBack size={22} />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );
}

export default function TeamExample() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const pages = [
    <Project12 key="Project12" />,
    <Project11 key="Project11" />,
    <Project04 key="Project04" />,
    <Project01 key="Project01" />,
    <Project02 key="Project02" />,
    <Project09 key="Project09" />,
    <Project10 key="Project10" />,
    <Project05 key="Project05" />,
    <Project03 key="Project03" />,
    <Project07 key="Project07" />,
    <Project06 key="Project06" />,
    <Project08 key="Project08" />,
    // Add more components as needed, each with a unique key
  ];

  const pageMeta = React.useMemo(
    () => [
      { label: "Cambridge Dogs" },
      { label: "Contributions by Zip3" },
      { label: "Event List" },
      { label: "Contact Form Integration" },
      { label: "Event Registration System" },
      { label: "VDLFA" },
      { label: "Nombolo" },
      { label: "Trey Savage" },
      { label: "Harold Designer" },
      { label: "Sales Raods" },
      { label: "Big Lake Data" },
      { label: "GTM" },
    ],
    []
  );

  //   // if (currentPage === 0) return "#5c24c9;";
  //   // if (currentPage > 0 && currentPage < 5) return "#eb4e6a";
  //   // if (currentPage >= 5 && currentPage  < 8) return "#00b145";
  //   return "#2841b1";
  // }, );

  const clientName = React.useMemo(() => {
    if (currentPage === 0) return "Personal Project";
    if (currentPage >= 1 && currentPage < 6) return "Client: Voces de la Frontera";
    if (currentPage === 6) return "Client: Nombolo";
    if (currentPage >= 6 && currentPage  < 9) return "Personal Projects";
    return "Client: Slingshot Content";
  }, [currentPage]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight } = e.currentTarget;
    const pageIndex = Math.round(scrollTop / clientHeight);
    setCurrentPage(pageIndex);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const top = index * el.clientHeight;
    el.scrollTo({ top, behavior: "smooth" });
  };

  const goNext = () => scrollToIndex(Math.min(currentPage + 1, pages.length - 1));
  const goPrev = () => scrollToIndex(Math.max(currentPage - 1, 0));

  // src/app/components/framesx-web-blocks/App.tsx
  React.useEffect(() => {
    document.body.classList.add("framesx-app");
    return () => document.body.classList.remove("framesx-app");
  }, []);

  return (
    <CssVarsProvider
      disableTransitionOnChange
      theme={framesxTheme}
      defaultMode="dark"
    >
      <CssBaseline />
      <HomeButton />
      <Box
        sx={{
          backgroundColor: '#03082e',
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: 'smooth',
          "& > div": {
            scrollSnapAlign: "start",
          },
        }}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {/* Top overlay with context + quick nav */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            zIndex: 10,
            px: 2,
            pointerEvents: 'none',
          }}
        >
          <Chip size="md" variant="soft" color="primary" sx={{ pointerEvents: 'auto' }}>
            {clientName}
          </Chip>
          <Box
            role="navigation"
            aria-label="Project quick navigation"
            sx={{
              display: 'flex',
              gap: 0.75,
              overflowX: 'auto',
              maxWidth: '100%',
              pb: 0.5,
              px: 1,
              borderRadius: 'sm',
              bgcolor: 'rgba(16,18,34,0.35)',
              backdropFilter: 'blur(6px)',
              pointerEvents: 'auto',
            }}
          >
            {pageMeta.map((p, i) => (
              <Chip
                key={p.label}
                variant={currentPage === i ? 'solid' : 'soft'}
                color={currentPage === i ? 'primary' : 'neutral'}
                onClick={() => { logFromApp(`Nav: ${p.label}`, { toIndex: i }); scrollToIndex(i); }}
                sx={{ cursor: 'pointer' }}
              >
                {p.label}
              </Chip>
            ))}
          </Box>
        </Box>

        {pages}
      </Box>
      {/* Right nav dots (clickable) */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: { xs: 12, sm: 20, md: 32 },
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          zIndex: 20,
        }}
      >
        {pageMeta.map((p, index) => (
          <Tooltip key={p.label} title={p.label} placement="left" variant="soft">
            <IconButton
              aria-label={`Go to ${p.label}`}
              variant={currentPage === index ? 'solid' : 'soft'}
              color={currentPage === index ? 'primary' : 'neutral'}
              onClick={() => { logFromApp(`Dot: ${p.label}`, { toIndex: index }); scrollToIndex(index); }}
              sx={{
                borderRadius: '50%',
                '--IconButton-size': '12px',
                p: 0,
                minWidth: '12px',
                minHeight: '12px',
              }}
            />
          </Tooltip>
        ))}
      </Box>

      {/* Bottom center next/prev controls */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 20,
        }}
      >
        <Button size="sm" variant="soft" startDecorator={<MdKeyboardArrowUp />} onClick={() => { logFromApp('Prev', { fromIndex: currentPage }); goPrev(); }} disabled={currentPage === 0}>
          Prev
        </Button>
        <Button size="sm" variant="solid" endDecorator={<MdKeyboardArrowDown />} onClick={() => { logFromApp('Next', { fromIndex: currentPage }); goNext(); }} disabled={currentPage === pages.length - 1}>
          Next
        </Button>
      </Box>
    </CssVarsProvider>
  );
}
