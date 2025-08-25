import React from "react";
import { Box, AppBar, Toolbar, IconButton, Tooltip } from "@mui/material";
import {
  Home,
  Code,
  BusinessCenter,
  Star,
  Mail,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const sections = [
  { id: "hero", text: "Home", icon: <Home /> },
  { id: "skills", text: "Skills", icon: <Code /> },
  { id: "projects", text: "Projects", icon: <BusinessCenter /> },
  { id: "certifications", text: "Certifications", icon: <Star /> },
  { id: "contact", text: "Contact", icon: <Mail /> },
];

const Sidebar = ({ toggleTheme, mode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Always render icons at the top right
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={(theme) => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: "unset",
        bgcolor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "rgba(255,255,255,0.7)",
        backdropFilter:
          theme.palette.mode === "dark" ? undefined : "blur(12px)",
        borderRadius: "0 0 18px 18px",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 8px 32px 0 rgba(31, 38, 135, 0.25)"
            : "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        border:
          theme.palette.mode === "dark"
            ? `1.5px solid ${theme.palette.background.paper}`
            : "1.5px solid rgba(255,255,255,0.18)",
        zIndex: 1200,
      })}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end", // <-- align to right
          alignItems: "center",
          minHeight: 60,
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          {sections.map((section) => (
            <Tooltip title={section.text} placement="bottom" key={section.id}>
              <IconButton
                onClick={() => handleScroll(section.id)}
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.background.paper
                      : "rgba(255,255,255,0.6)",
                  color: (theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.main
                      : "primary.main",
                  mx: 0.5,
                  border: "1.5px solid #e0e7ef",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 2.5,
                  transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                  "&:hover": {
                    bgcolor: (theme) => theme.palette.primary.main,
                    color: "#fff",
                    transform: "scale(1.13) rotate(-6deg)",
                    boxShadow: "0 4px 16px 0 rgba(79,70,229,0.18)",
                    border: "1.5px solid #6366f1",
                  },
                }}
              >
                {section.icon}
              </IconButton>
            </Tooltip>
          ))}
          <Tooltip
            title={mode === "dark" ? "Light mode" : "Dark mode"}
            placement="bottom"
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                width: 44,
                height: 44,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.background.paper
                    : "rgba(255,255,255,0.6)",
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.main
                    : "primary.main",
                mx: 0.5,
                border: "1.5px solid #e0e7ef",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
                backdropFilter: "blur(8px)",
                borderRadius: 2.5,
                transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                "&:hover": {
                  bgcolor: (theme) => theme.palette.primary.main,
                  color: "#fff",
                  transform: "scale(1.13) rotate(-6deg)",
                  boxShadow: "0 4px 16px 0 rgba(79,70,229,0.18)",
                  border: "1.5px solid #6366f1",
                },
              }}
            >
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;