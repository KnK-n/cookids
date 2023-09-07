import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ContainedButton = styled(Button)({
  fontSize: "15px",
  color: "#272343",
  backgroundColor: "#FFD803",
  padding: 10,
  borderRadius: 30,
  textTransform: "none",
  "&:hover": {
    border: "solid",
    borderColor: "#FFD803",
  },
});

export const OutlinedButton = styled(Button)({
  fontSize: "15px",
  color: "#272343",
  backgroundColor: "#fffffe",
  border: "solid",
  borderColor: "#FFD803",
  padding: 10,
  borderRadius: 30,
  textTransform: "none",
  "&:hover": {
    color: "#272343",
    backgroundColor: "#FFD803",
  },
});
