"use client";
import React from "react";
import { Avatar, Box, Stack, Button, Typography, IconButton } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Header = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            alignItems: "center",
          }}
        >
          <Stack>LOGO</Stack>
          <Stack direction="row" spacing={2}>
            <Typography>Home</Typography>
            <Typography>Calendar</Typography>
            <Typography>Nutrients</Typography>
          </Stack>
          <IconButton size="small">
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Box>
        <div>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </div>
      </>
    );
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
        <Stack>LOGO</Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" size="small">
            Log in
          </Button>
          <Button variant="contained" size="small">
            Sign up
          </Button>
        </Stack>
      </Box>
      <a href="/api/auth/login">Login</a>
    </>
  );
};
