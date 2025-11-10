import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafc" }}>
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Área de conteúdo */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: "240px" },
          p: 1,
          transition: "margin-left 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Outlet /> {/* Aqui entram as rotas (Home, Estoques, etc.) */}
        <Footer />

      </Box>
    </Box>
  );
}
