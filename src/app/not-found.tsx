import * as React from "react";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography level="h1" sx={{ mb: 1 }}>404</Typography>
      <Typography level="body-lg" textColor="text.secondary" sx={{ mb: 3 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={Link} href="/" variant="soft">
        Back to home
      </Button>
    </Container>
  );
}

