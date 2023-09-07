import React from "react";
import { Box, Stack } from "@mui/material";
import { ContainedButton, OutlinedButton } from "../button/button";

export const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Stack>LOGO</Stack>
      <Stack direction="row" spacing={2}>
        <OutlinedButton>Log in</OutlinedButton>
        <ContainedButton>Sign up</ContainedButton>
      </Stack>
    </Box>
  );
};
