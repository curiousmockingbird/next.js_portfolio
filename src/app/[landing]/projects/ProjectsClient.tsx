"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";
import Tooltip from "@mui/joy/Tooltip";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import { MdArrowBack, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import data from "@/content/landings.json" assert { type: "json" };
import framesxTheme from "@/app/components/framesx-web-blocks/theme";

// Import available project blocks
import Vdlf from "@/app/components/framesx-web-blocks/blocks/Vdlf";
import GalaTicketingSystem from "@/app/components/framesx-web-blocks/blocks/GalaTicketingSystem";
import HarolDesigner from "@/app/components/framesx-web-blocks/blocks/HarolDesigner";
import EveryActionEvents from "@/app/components/framesx-web-blocks/blocks/EveryActionEvents";
import TreySavage from "@/app/components/framesx-web-blocks/blocks/TreySavage";
import BigLakeData from "@/app/components/framesx-web-blocks/blocks/BigLakeData";
import SalesRaods from "@/app/components/framesx-web-blocks/blocks/SalesRaods";
import GTM from "@/app/components/framesx-web-blocks/blocks/gtm";
import VDLFA from "@/app/components/framesx-web-blocks/blocks/VDLFA";
import Nombolo from "@/app/components/framesx-web-blocks/blocks/Nombolo";
import Zip3 from "@/app/components/framesx-web-blocks/blocks/Zip3";
import Dogs from "@/app/components/framesx-web-blocks/blocks/Dogs";

const registry: Record<string, React.ComponentType<any>> = {
  Vdlf,
  GalaTicketingSystem,
  HarolDesigner,
  EveryActionEvents,
  TreySavage,
  BigLakeData,
  SalesRaods,
  gtm: GTM,
  GTM,
  VDLFA,
  Nombolo,
  Zip3,
  Dogs,
};

const displayNames: Record<string, string> = {
  Vdlf: "Contact Form Integration",
  GalaTicketingSystem: "Event Registration System",
  HarolDesigner: "Harol Designer",
  EveryActionEvents: "Event List",
  TreySavage: "Trey Savage",
  BigLakeData: "Big Lake Data",
  SalesRaods: "Sales Roads",
  gtm: "Content Tank Platform",
  GTM: "Content Tank Platform",
  VDLFA: "VDLFA",
  Nombolo: "Nombolo",
  Zip3: "Contributions by Zip3",
  Dogs: "Cambridge Dogs",
};

export default function ProjectsClient({ landing }: { landing: string }) {
  const page = (data as any).pages?.[landing];
  const list: string[] = page?.projects || [];
  const components = list
    .map((key) => registry[key])
    .filter(Boolean) as React.ComponentType[];

  const labels = list.map((k) => displayNames[k] || k);

  const [currentPage, setCurrentPage] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight } = e.currentTarget as HTMLDivElement;
    const pageIndex = Math.round(scrollTop / clientHeight);
    setCurrentPage(pageIndex);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const top = index * el.clientHeight;
    el.scrollTo({ top, behavior: "smooth" });
  };

  const goNext = () => scrollToIndex(Math.min(currentPage + 1, components.length - 1));
  const goPrev = () => scrollToIndex(Math.max(currentPage - 1, 0));

  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme} defaultMode="dark">
      <CssBaseline />
      {/* Top-left back button */}
      <Box sx={{ position: 'fixed', top: 16, left: { xs: 12, sm: 16, md: 24 }, zIndex: 30 }}>
        <Tooltip title={`Back to ${landing}`} variant="soft" placement="right">
          <Link href={`/${landing}`} aria-label={`Back to ${landing}`}>
            <IconButton variant="soft" color="neutral" size="lg" sx={{ borderRadius: '50%' }}>
              <MdArrowBack size={22} />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>

      {/* Scroll-snap container matching Blocks App */}
      <Box
        sx={{
          backgroundColor: '#03082e',
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          '& > div': { scrollSnapAlign: 'start' },
        }}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {/* Top overlay: landing label + quick nav chips */}
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
            {page?.title || 'Projects'}
          </Chip>
          <Box
            role="navigation"
            aria-label={`${landing} projects quick navigation`}
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
            {labels.map((label, i) => (
              <Chip
                key={`${label}-${i}`}
                variant={currentPage === i ? 'solid' : 'soft'}
                color={currentPage === i ? 'primary' : 'neutral'}
                onClick={() => scrollToIndex(i)}
                sx={{ cursor: 'pointer' }}
              >
                {label}
              </Chip>
            ))}
          </Box>
        </Box>

        {/* Slides */}
        {components.length === 0 && (
          <Container sx={{ py: 6, textAlign: 'center' }}>
            <Typography level="body-lg">No projects linked yet.</Typography>
          </Container>
        )}
        {components.map((Comp, idx) => (
          <Box key={idx} sx={{ minHeight: '100vh' }}>
            <Comp />
          </Box>
        ))}
      </Box>

      {/* Right nav dots */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: { xs: 12, sm: 20, md: 32 },
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          zIndex: 20,
        }}
      >
        {labels.map((label, index) => (
          <Tooltip key={`${label}-dot`} title={label} placement="left" variant="soft">
            <IconButton
              aria-label={`Go to ${label}`}
              variant={currentPage === index ? 'solid' : 'soft'}
              color={currentPage === index ? 'primary' : 'neutral'}
              onClick={() => scrollToIndex(index)}
              sx={{ borderRadius: '50%', '--IconButton-size': '12px', p: 0, minWidth: '12px', minHeight: '12px' }}
            />
          </Tooltip>
        ))}
      </Box>

      {/* Bottom next/prev */}
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
        <Button size="sm" variant="soft" startDecorator={<MdKeyboardArrowUp />} onClick={goPrev} disabled={currentPage === 0}>
          Prev
        </Button>
        <Button size="sm" variant="solid" endDecorator={<MdKeyboardArrowDown />} onClick={goNext} disabled={currentPage === components.length - 1}>
          Next
        </Button>
      </Box>
    </CssVarsProvider>
  );
}
