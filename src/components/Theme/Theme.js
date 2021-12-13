import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

export default function Theme({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        mode === "light"
          ? localStorage.setItem("theme", "dark")
          : localStorage.setItem("theme", "light");
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: localStorage.getItem("theme") || mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
