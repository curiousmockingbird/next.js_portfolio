import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";

export default function TwoSidedLayout({
  children,
  reversed,
  img,
  alt,
  box1logo,
  box2logo,
  box3logo,
  box4logo,
}: React.PropsWithChildren<{
  reversed?: boolean;
  img: string;
  alt: string;
  box1logo: string;
  box2logo: string;
  box3logo: string;
  box4logo: string;
  id: string;
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
          flexDirection: "column",
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
              minWidth: 420,
              maxWidth: "40ch",
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
            maxWidth: { xs: 200, md: 300 }, // Adjust maxWidth for mobile
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
            width={500}
            height={300}
            style={{ width: "100%", height: "auto" }}
            priority // Loads the image faster if it's important
          />
        </AspectRatio>
      </Box>

      <Container
        sx={{
          backgroundImage:
            "linear-gradient(to right, #fde68a , #fb923c, #d97706)",
          borderRadius: "10px",
          display: "flex",
          width: "100%",
          height: "10vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: { xs: "6vh", sm: "8vh", md: "10vh" }, // Adjust width for mobile
            height: { xs: "6vh", sm: "8vh", md: "10vh" }, // Adjust height for mobile
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="text-black underline text-xs">Technologies:</p>
        </Box>
        {[box4logo, box3logo, box1logo, box2logo].map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "6vh", sm: "8vh", md: "7vh" }, // Adjust width for mobile
              height: { xs: "6vh", sm: "8vh", md: "7vh" }, // Adjust height for mobile
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              alt={alt}
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
              priority // Loads the image faster if it's important
            />
          </Box>
        ))}
      </Container>
    </Container>
  );
}
