import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";

export default function TwoSidedLayout({
  children,
  reversed,
  img,
  alt,
  technologies,
}: React.PropsWithChildren<{
  reversed?: boolean;
  img: string;
  alt: string;
  technologies?: string[];
}>) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
        gap: 4,
        [theme.breakpoints.up("md")]: {
          // Keep vertical stacking; inner Box handles row switch
          gap: 6,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: reversed ? "column-reverse" : "column",
          alignItems: "center",
          gap: 4,
          width: "100%",
          [theme.breakpoints.up("md")]: {
            flexDirection: reversed ? "row-reverse" : "row",
            gap: 6,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "90%",
            textAlign: "center",
            flexShrink: 999,
            [theme.breakpoints.up("md")]: {
              maxWidth: "40ch", // Use ch units for better readability
              alignItems: "flex-start",
              textAlign: "initial",
            },
            [`& .${typographyClasses.root}`]: {
              textWrap: "balance",
            },
          })}
        >
          {children}
        </Box>

        <AspectRatio
          ratio={520 / 300}
          variant="outlined"
          sx={(theme) => ({
            width: "100%",
            maxWidth: { xs: "90%", md: "50%" }, // Use relative units for better scaling
            alignSelf: "center",
            [theme.breakpoints.up("md")]: {
              alignSelf: "initial",
              flexGrow: 1,
              maxWidth: "50%",
            },
            borderRadius: "lg",
            bgcolor: "background.level2",
            flexBasis: "50%",
          })}
        >
          <Image
            src={img}
            alt={alt}
            fill // Use fill to make the image responsive
            style={{ objectFit: "cover" }} // Ensure the image covers the container
            priority // Loads the image faster if it's important
          />
        </AspectRatio>
      </Box>
      {Array.isArray(technologies) && technologies.length > 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 1.5,
            flexShrink: 0,
          }}
        >
          {technologies.map((tech) => (
            <Typography
              key={tech}
              level="body-sm"
              sx={{
                px: 1.25,
                py: 0.5,
                borderRadius: "sm",
                bgcolor: "background.level1",
                border: "1px solid",
                borderColor: "divider",
                letterSpacing: 0.2,
                textTransform: "capitalize",
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      )}
    </Container>
  );
}
