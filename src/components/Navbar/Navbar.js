import React, { useContext } from "react";

import {
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  TextField,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../context/ColorModeContext";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useFetchQuery from "../../hook/useFetchQuery";

import { useDebouncedCallback } from "use-lodash-debounce";

export default function Navbar() {
  const { handleSearch } = useFetchQuery();
  const debounced = useDebouncedCallback(handleSearch, 700);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "3rem" }}>
      <AppBar
        position="static"
        color="inherit"
        style={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(200, 200, 200, 0.4)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" component="div">
            Gallery
          </Typography>

          <TextField
            size="small"
            label="Search"
            defaultValue=""
            type="text"
            onChange={(e) => {
              e.preventDefault();
              debounced(e.target.value.toLowerCase());
              e.target.value = "";
            }}
          />

          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
