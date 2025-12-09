import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { MdArrowForward } from "react-icons/md";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function AcmeShowcase() {
  return (
    <TwoSidedLayout
      technologies={["next.js", "typescript", "mui", "vercel"]}
      alt="Acme Labs project screenshot"
      img="https://res.cloudinary.com/graphicdesignportfolio/image/upload/v1757461943/samples/graphic_design_work/devProjects/Screenshot_2025-09-09_at_7.51.10_PM_dvnjph.png"
    >
      <Typography
        level="h1"
        fontWeight="xl"
        lineHeight="2.5rem"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Cubuntu
      </Typography>
      <Typography fontSize="lg" lineHeight="lg">
        Responsive marketing website with reusable components, themeable design system, and
        fast page loads. Built with Next.js and Joy UI.
      </Typography>
      <Button
        size="lg"
        component="a"
        href="#"
        onClick={() => {}}
        startDecorator={<MdArrowForward size={28} />}
      >
        Visit
      </Button>
    </TwoSidedLayout>
  );
}

