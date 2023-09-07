import { Avatar, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const LogedInHeader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Stack>LOGO</Stack>
      <Stack direction="row" spacing={2}>
        <Typography>Home</Typography>
        <Typography>Calendar</Typography>
        <Typography>Nutrients</Typography>
      </Stack>
      <Stack sx={{ mt: -0.5 }}>
        <IconButton size="small">
          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
        </IconButton>
      </Stack>
    </Box>
  );
};
