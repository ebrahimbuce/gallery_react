import React from "react";
import Router from "./router";
import { Container, Paper } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg">
        <Router />
      </Container>
    </Paper>
  );
}
