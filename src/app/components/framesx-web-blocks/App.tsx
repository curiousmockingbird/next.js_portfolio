'use client'
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { MdArrowBack } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { logFromApp } from "./utils/logger";
import HomeButton from "../HomeButton";
// import Toggle from './components/Toggle'
import Image from "next/image";
import framesxTheme from "./theme";
import ContactFormIntegration from "./blocks/Vdlf";
import EventRegistrationSystem from "./blocks/GalaTicketingSystem";
import HaroldDesigner from "./blocks/HarolDesigner";
import EventList from "./blocks/EveryActionEvents";
import TreySavage from "./blocks/TreySavage";
import BigLakeData from "./blocks/BigLakeData";
import SalesRaods from "./blocks/SalesRaods";
import GTM from "./blocks/gtm";
import VDLFA from "./blocks/VDLFA";
import Nombolo from "./blocks/Nombolo";
import Cubuntu from "./blocks/Cubuntu";
import ContributionsByZip3 from "./blocks/Zip3";
import CambridgeDogs from "./blocks/Dogs";
import C3 from "./blocks/C3";

// HomeButton moved to reusable component src/app/components/HomeButton.tsx

import { useSearchParams } from "next/navigation";

export default function TeamExample() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [view, setView] = React.useState<'overview' | 'detail'>("overview");
  const [selectedClient, setSelectedClient] = React.useState<
    'Nombolo' | 'Voces de la Frontera' | 'Slingshot Content' | 'Personal Projects' | 'Cubuntu' | null
  >(null);
  // Mobile nav: collapse/expand the quick-nav chips
  const [navOpen, setNavOpen] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);
  const pendingProjectSlugRef = React.useRef<string | null>(null);

  type Project = { label: string; client: 'Nombolo' | 'Voces de la Frontera' | 'Slingshot Content' | 'Personal Projects' | 'Cubuntu'; node: React.ReactNode; slug?: string };
  const allProjects: Project[] = [
    { label: 'Nombolo', client: 'Nombolo', node: <Nombolo />, slug: 'nombolo' },
    // New client and project
    { label: 'Podcast host & Community Platform', client: 'Cubuntu', node: <Cubuntu />, slug: 'cubuntu' },
    // C3 block: expose an addressable slug
    { label: 'VDLF', client: 'Voces de la Frontera', node: <C3 />, slug: 'vdlf' },
    { label: 'VDLF Action', client: 'Voces de la Frontera', node: <VDLFA />, slug: 'vdlfa' },
    { label: 'Event List', client: 'Voces de la Frontera', node: <EventList />, slug: 'event-list' },
    { label: 'Event Registration System', client: 'Voces de la Frontera', node: <EventRegistrationSystem /> },
    { label: 'Contact Form Integration', client: 'Voces de la Frontera', node: <ContactFormIntegration /> },
    { label: 'Contributions by Zip3', client: 'Voces de la Frontera', node: <ContributionsByZip3 /> },
    { label: 'Sales Roads', client: 'Slingshot Content', node: <SalesRaods />, slug: 'sales-roads' },
    { label: 'Big Lake Data', client: 'Slingshot Content', node: <BigLakeData />, slug: 'big-lake-data' },
    { label: 'GTM', client: 'Slingshot Content', node: <GTM /> },
    { label: 'Trey Savage', client: 'Personal Projects', node: <TreySavage /> },
    { label: 'Harold Designer', client: 'Personal Projects', node: <HaroldDesigner /> },
    { label: 'Cambridge Dogs', client: 'Personal Projects', node: <CambridgeDogs /> },
  ];

  const clientOrder: Array<Project['client']> = [
    'Voces de la Frontera',
    'Slingshot Content',
    'Nombolo',
    'Cubuntu',
    'Personal Projects',
  ];

  const clientCovers: Record<Project['client'], { src: string; alt: string }> = {
    'Nombolo': { src: '/nombolo_copy.png', alt: 'Nombolo projects cover'},
    'Voces de la Frontera': { src: '/vdlf.png', alt: 'Voces de la Frontera projects cover' },
    'Slingshot Content': { src: 'https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1772165150/Square_blue_2x_hrzttr.png', alt: 'Slingshot Content projects cover' },
    'Cubuntu': { src: '/cubuntu.svg', alt: 'Cubuntu projects cover' },
    'Personal Projects': { src: '/curious_mockingbird_pic.jpg', alt: 'Personal Projects cover' },
  };

  const clientTaglines: Record<Project['client'], string> = {
    'Nombolo': 'Portland, OR based startup on a mission to better connect people',
    'Voces de la Frontera': 'Civic engagement and events tooling',
    'Slingshot Content': 'Full-stack support for consulting agencies and their clients',
    'Cubuntu': 'Podcast hosting and community platform',
    'Personal Projects': 'Solo experiments and demos',
  };

  const categories = React.useMemo(() => {
    const counts: Record<Project['client'], number> = {
      'Nombolo': 0,
      'Voces de la Frontera': 0,
      'Slingshot Content': 0,
      'Cubuntu': 0,
      'Personal Projects': 0,
    };
    allProjects.forEach((p) => { counts[p.client] += 1; });
    return clientOrder.map((client) => ({ client, count: counts[client] }));
  }, []);

  const projectsForClient = React.useMemo(() => {
    if (!selectedClient) return [] as Project[];
    return allProjects.filter((p) => p.client === selectedClient);
  }, [selectedClient]);

  const pages = projectsForClient.map((p) => React.cloneElement(p.node as React.ReactElement, { key: p.label }));

  const pageMeta = React.useMemo(
    () => projectsForClient.map((p) => ({ label: p.label })),
    [projectsForClient]
  );


  const clientName = React.useMemo(() => {
    return selectedClient ? (selectedClient === 'Personal Projects' ? 'Personal Projects' : `Client: ${selectedClient}`) : '';
  }, [selectedClient]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const { scrollTop, clientHeight } = el;
    // Account for top padding used to offset the mobile overlay
    let paddingTop = 0;
    if (typeof window !== 'undefined') {
      try {
        const cs = window.getComputedStyle(el);
        paddingTop = parseFloat(cs.paddingTop || '0') || 0;
      } catch {}
    }
    const adjusted = Math.max(0, scrollTop - paddingTop);
    const rawIndex = adjusted / clientHeight;
    const pageIndex = Math.max(0, Math.min(pages.length - 1, Math.round(rawIndex)));
    setCurrentPage(pageIndex);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    let paddingTop = 0;
    if (typeof window !== 'undefined') {
      try {
        const cs = window.getComputedStyle(el);
        paddingTop = parseFloat(cs.paddingTop || '0') || 0;
      } catch {}
    }
    const top = paddingTop + index * el.clientHeight;
    el.scrollTo({ top, behavior: "smooth" });
  };

  const goNext = () => scrollToIndex(Math.min(currentPage + 1, pages.length - 1));
  const goPrev = () => scrollToIndex(Math.max(currentPage - 1, 0));

  const scrollCarousel = (dir: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    logFromApp('Carousel scroll', { direction: dir });
  };

  // src/app/components/framesx-web-blocks/App.tsx
  React.useEffect(() => {
    document.body.classList.add("framesx-app");
    return () => document.body.classList.remove("framesx-app");
  }, []);

  // Support deep-linking via query params: ?project=c3 (optional ?client=<slug>)
  const searchParams = useSearchParams();
  React.useEffect(() => {
    const maybeProject = searchParams?.get('project');
    const maybeClient = searchParams?.get('client');

    // Fallback: allow #project=c3 in the hash
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const hashProject = hash.startsWith('#project=') ? hash.split('=')[1] : null;

    const projectSlug = (maybeProject || hashProject)?.toLowerCase();
    if (!projectSlug) return;

    const target = allProjects.find(p => (p.slug || p.label.toLowerCase().replace(/\s+/g, '-')) === projectSlug);
    if (!target) return;

    pendingProjectSlugRef.current = projectSlug;
    setSelectedClient(target.client);
    setView('detail');
    setCurrentPage(0);
  // We only want to respond to initial params; eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After switching to the client detail view, scroll to the target project by slug
  React.useEffect(() => {
    const slug = pendingProjectSlugRef.current;
    if (!slug) return;
    if (view !== 'detail') return;
    if (!projectsForClient.length) return;

    const idx = projectsForClient.findIndex(p => (p.slug || p.label.toLowerCase().replace(/\s+/g, '-')) === slug);
    if (idx >= 0) {
      // Delay a tick to ensure the container size is final before scrolling
      requestAnimationFrame(() => {
        scrollToIndex(idx);
        setCurrentPage(idx);
      });
    }
    pendingProjectSlugRef.current = null;
  }, [view, projectsForClient]);

  return (
    <CssVarsProvider
      disableTransitionOnChange
      theme={framesxTheme}
      defaultMode="dark"
    >
      <CssBaseline />
      {view === 'overview' ? (
        <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          p: 2,
        }}
        >
          <Box sx={{ width: '100%', maxWidth: { xs: 1000, md: 1400, lg: 1600 }, px: { xs: 1, sm: 2 } }}>
        <HomeButton inline />
            <Typography level="h3" sx={{ mb: 2, color: '#fff', textAlign:'center' }}>Projects by Client</Typography>
            <Box sx={{ position: 'relative' }}>
              <IconButton
                aria-label="Scroll left"
                variant="soft"
                color="neutral"
                onClick={() => scrollCarousel('left')}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: { xs: 4, sm: 8 },
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  boxShadow: 'sm',
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              >
                <MdChevronLeft size={22} />
              </IconButton>

              <IconButton
                aria-label="Scroll right"
                variant="soft"
                color="neutral"
                onClick={() => scrollCarousel('right')}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: { xs: 4, sm: 8 },
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  boxShadow: 'sm',
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              >
                <MdChevronRight size={22} />
              </IconButton>

              <Box
                ref={carouselRef}
                role="region"
                aria-label="Clients carousel"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  overflowX: { xs: 'visible', sm: 'auto' },
                  overflowY: { xs: 'visible', sm: 'hidden' },
                  scrollSnapType: { xs: 'none', sm: 'x mandatory' },
                  scrollBehavior: 'smooth',
                  pb: 1,
                  px: 1,
                  mx: { xs: 0, sm: 0 },
                  '&::-webkit-scrollbar': { display: 'none' },
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {categories.map(({ client, count }, idx) => {
                  const cover = clientCovers[client] || { src: '/home.jpg', alt: `${client} cover` };
                  return (
                    <Card
                      key={client}
                      variant="outlined"
                      sx={{
                        cursor: 'pointer',
                        overflow: 'hidden',
                        position: 'relative',
                        aspectRatio: '1 / 1',
                        width: { xs: '100%', sm: 'auto' },
                        minWidth: { xs: '100%', sm: '60%', md: '45%' },
                        flex: { xs: '0 1 auto', sm: '0 0 auto' },
                        scrollSnapAlign: { sm: 'center' },
                        transition: 'transform 150ms ease, box-shadow 150ms ease',
                        '&:hover': { boxShadow: 'lg', transform: 'translateY(-2px)' },
                      }}
                      role="button"
                      aria-label={`${client}: ${count} project${count === 1 ? '' : 's'}. View projects.`}
                      onClick={() => {
                        // Track client card clicks to Logtail via /api/logs
                        logFromApp('client_card', { client, projects: count, index: idx });
                        setSelectedClient(client);
                        setView('detail');
                        setCurrentPage(0);
                      }}
                    >
                      <CardCover sx={{ bgcolor: '#fff' }}>
                        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                          <Image
                            src={cover.src}
                            alt={cover.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
                            style={{ objectFit: 'contain' }}
                            priority={false}
                          />
                        </Box>
                      </CardCover>
                      <CardCover sx={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)'
                      }} />
                      <CardContent
                        sx={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 0.5,
                          p: 1.5,
                        }}
                      >
                        <Typography level="h4" sx={{ color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
                          {client}
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          {clientTaglines[client]}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                          <Chip
                            size="sm"
                            variant="soft"
                            color="neutral"
                            sx={{ bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(2px)' }}
                          >
                            {count} project{count === 1 ? '' : 's'}
                          </Chip>
                          <Typography level="body-sm" sx={{ color: '#fff' }}>View projects →</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
      <Box
        sx={{
          backgroundColor: '#03082e',
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: 'smooth',
          // On small screens, add dynamic top padding so the overlay doesn't cover content
          pt: { xs: navOpen ? 120 : 64, sm: 0 },
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
            top: { xs: 8, sm: 16 },
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            zIndex: 10,
            px: 2,
            pointerEvents: 'auto',
          }}
        >
          {/* Toolbar row with Back, client label, and Sections toggle (mobile) */}
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <Button
              size="sm"
              variant="soft"
              onClick={() => { setView('overview'); setSelectedClient(null); setCurrentPage(0); setNavOpen(false); }}
              startDecorator={<MdArrowBack />}
            >
              Back
            </Button>
            {selectedClient && (
              <Chip
                size="sm"
                variant="soft"
                color="primary"
                sx={{
                  maxWidth: { xs: '55%', sm: 'unset' },
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {clientName}
              </Chip>
            )}
            <Button
              size="sm"
              variant={navOpen ? 'solid' : 'soft'}
              color={navOpen ? 'primary' : 'neutral'}
              onClick={() => setNavOpen((v) => !v)}
              sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            >
              Sections
            </Button>
          </Box>

          {/* Quick navigation chips: collapsible on xs, always visible on sm+ */}
          {navOpen && (
            <Box
              role="navigation"
              aria-label="Project quick navigation"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                gap: 0.75,
                overflowX: 'auto',
                maxWidth: '100%',
                py: 0.5,
                px: 1,
                borderRadius: 'sm',
                bgcolor: 'rgba(16,18,34,0.35)',
                backdropFilter: 'blur(6px)',
                pointerEvents: 'auto',
              }}
            >
              {pageMeta.map((p, i) => (
                <Chip
                  key={`xs-${p.label}`}
                  variant={currentPage === i ? 'solid' : 'soft'}
                  color={currentPage === i ? 'primary' : 'neutral'}
                  onClick={() => { logFromApp(`Nav: ${p.label}`, { toIndex: i }); scrollToIndex(i); setNavOpen(false); }}
                  sx={{ cursor: 'pointer' }}
                >
                  {p.label}
                </Chip>
              ))}
            </Box>
          )}
          <Box
            role="navigation"
            aria-label="Project quick navigation"
            sx={{
              display: { xs: 'none', sm: 'flex' },
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
                key={`sm-${p.label}`}
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
      )}
      {/* Right nav dots (clickable) */}
      {view === 'detail' && (
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
      )}

      {/* Bottom center next/prev controls */}
      {view === 'detail' ? (
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
      ) : (
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
          {selectedClient ? (
            <Button size="sm" variant="solid" onClick={() => setView('detail')}>
              View {selectedClient} projects
            </Button>
          ) : null}
        </Box>
      )}
    </CssVarsProvider>
  );
}
