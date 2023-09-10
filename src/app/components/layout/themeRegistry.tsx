"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Noto_Sans_JP",
      button: {
        textTransform: "none",
      },
    },
    palette: {
      background: {
        default: "#fffffe",
      },
      primary: {
        main: "#ffd803",
      },
      text: {
        primary: "#272343",
      },
    },
    shape: { borderRadius: 15 },
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            color: "#272343",
            border: "2px solid #ffd803",
            "&:hover": {
              border: "2px solid #ffd803",
            },
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
