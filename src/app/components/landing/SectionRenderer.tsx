"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";

type CTA = { label: string; href: string };
type Section =
  | { type: "hero"; eyebrow?: string; heading: string; subheading?: string; cta?: CTA }
  | { type: "bullets"; heading?: string; items: { title: string; text: string }[] }
  | { type: "cta"; heading: string; cta: CTA };

export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 8 } }}>
      {sections.map((s, i) => {
        switch (s.type) {
          case "hero":
            return <Hero key={i} {...s} />;
          case "bullets":
            return <Bullets key={i} {...s} />;
          case "cta":
            return <CallToAction key={i} {...s} />;
          default:
            return null;
        }
      })}
    </Box>
  );
}

function Hero({ eyebrow, heading, subheading, cta }: { eyebrow?: string; heading: string; subheading?: string; cta?: CTA }) {
  return (
    <Container sx={{ textAlign: "center", py: { xs: 6, md: 10 } }}>
      {eyebrow && (
        <Typography level="body-sm" sx={{ color: "primary.plainColor", mb: 1 }}>
          {eyebrow}
        </Typography>
      )}
      <Typography level="h1" sx={{ mb: 1 }}>{heading}</Typography>
      {subheading && (
        <Typography level="body-lg" textColor="text.secondary" sx={{ maxWidth: 780, mx: "auto", mb: 2 }}>
          {subheading}
        </Typography>
      )}
      {cta && (
        <Button component="a" href={cta.href} size="lg" variant="solid">
          {cta.label}
        </Button>
      )}
    </Container>
  );
}

function Bullets({ heading, items }: { heading?: string; items: { title: string; text: string }[] }) {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      {heading && (
        <Typography level="h2" sx={{ textAlign: "center", mb: 3 }}>
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        {items.map((it, idx) => (
          <Box key={idx} sx={{ p: 2, borderRadius: "md", bgcolor: "background.level1", border: "1px solid", borderColor: "divider" }}>
            <Typography level="title-lg" sx={{ mb: 0.5 }}>{it.title}</Typography>
            <Typography level="body-sm" textColor="text.secondary">{it.text}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

function CallToAction({ heading, cta }: { heading: string; cta: CTA }) {
  return (
    <Container sx={{ textAlign: "center", py: { xs: 6, md: 8 } }}>
      <Typography level="h2" sx={{ mb: 1 }}>{heading}</Typography>
      <Button component="a" href={cta.href} size="lg" variant="soft">
        {cta.label}
      </Button>
    </Container>
  );
}

