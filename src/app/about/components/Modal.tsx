import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider";
import Link from "@mui/joy/Link";
import Box from "@mui/joy/Box";

export default function ResumeModal({ width }: { width: number }) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        View Full Resume
      </Button>
      <Modal
        aria-labelledby="resume-title"
        aria-describedby="resume-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: width,
            borderRadius: "md",
            p: 4,
            boxShadow: "lg",
            width: "90vw",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {/* Header */}
          <Typography
            level="h2"
            fontWeight="xl"
            textAlign="center"
            color="primary"
            mb={1}
          >
            Harold Mesa
          </Typography>
          <Typography textAlign="center" fontSize="lg" fontWeight="md">
            Full-Stack Web Developer
          </Typography>
          <Typography
            textAlign="center"
            fontSize="md"
            sx={{ color: "blue", fontWeight: "md" }}
          >
            haroldeveIoper.tech
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Contact Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography level="h4" fontWeight="lg">
              Contact
            </Typography>
            {/* <Typography fontSize="sm">📞 (414) 218-4502</Typography> */}
            <Typography fontSize="sm">✉️ hola@haroldeveIoper.tech</Typography>
            <Link
              href="https://linkedin.com/in/haroldmesa93"
              target="_blank"
              fontSize="sm"
              sx={{ color: "blue" }}
            >
              linkedin.com/in/haroldmesa93
            </Link>
            <Link
              href="https://github.com/curiousmockingbird"
              target="_blank"
              fontSize="sm"
              sx={{ color: "blue" }}
            >
              github.com/curiousmockingbird
            </Link>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Work Experience Section */}
          <Typography level="h4" fontWeight="lg">
            Work Experience
          </Typography>
          <Typography fontSize="sm" fontWeight="md" sx={{ color: "blue" }}>
            VOCES DE LA FRONTERA | Feb 2023 - Present | Milwaukee, WI
          </Typography>
          <Typography fontSize="sm" sx={{ pl: 2 }}>
            - Application Lifecycle Management: Overseeing projects from conception to deployment, ensuring robust backend functionality and engaging front-ends.
            <br />- API Integration & Performance Optimization: Enhancing application efficiency and user experience.
            <br />- Project Coordination: Aligning technology with broader organizational goals.
          </Typography>

          <Typography fontSize="sm" fontWeight="md" sx={{ color: "blue" }} mt={2}>
          SLINGSHOT CONTENT | Jan 2024 - Present | Remote
          </Typography>
          <Typography fontSize="sm" sx={{ pl: 2 }}>
            - Website Management: Overseeing design, development, and administration for seamless online presence.
          </Typography>

          <Typography fontSize="sm" fontWeight="md" sx={{ color: "blue" }} mt={2}>
            NOMBOLO | Jan 2022 - Mar 2022 | Portland, OR
          </Typography>
          <Typography fontSize="sm" sx={{ pl: 2 }}>
            - React Native UI Development: Designed and built a rewards system.
            <br />- AWS Backend Troubleshooting: Optimized data fetching and resolved API issues.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Education Section */}
          <Typography level="h4" fontWeight="lg">
            Education
          </Typography>
          <Typography fontSize="sm" fontWeight="md">
            B.A. Visual Communication Design
          </Typography>
          <Typography fontSize="sm">University of Havana, ISDI, Cuba</Typography>

          <Typography fontSize="sm" fontWeight="md" mt={1}>
            M.A. Integrated Design
          </Typography>
          <Typography fontSize="sm">
            Hochschule Anhalt, Dessau, Germany
          </Typography>

          <Typography fontSize="sm" fontWeight="md" mt={1}>
            Full-Stack Web Development
          </Typography>
          <Typography fontSize="sm">Epicodus, Portland, OR</Typography>

          <Divider sx={{ my: 2 }} />

          {/* Skills Section */}
          <Typography level="h4" fontWeight="lg">
            Tools & Skills
          </Typography>
          <Typography fontSize="sm" fontWeight="md">
            Web Development:
          </Typography>
          <Typography fontSize="sm">
            HTML • CSS • JavaScript • Figma • React • Next.js • C# • ASP.NET •
            Apollo GraphQL • MySQL
          </Typography>

          <Typography fontSize="sm" fontWeight="md" mt={1}>
            Design Thinking:
          </Typography>
          <Typography fontSize="sm">UI/UX Design, Wireframing, Prototyping</Typography>

          <Divider sx={{ my: 2 }} />

          {/* Languages Section */}
          <Typography level="h4" fontWeight="lg">
            Languages
          </Typography>
          <Typography fontSize="sm">
            English/Spanish (Bilingual) <br />
            German (B2 CEFR Level)
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
