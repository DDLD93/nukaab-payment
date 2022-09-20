import { ThemeProvider } from "@emotion/react";
import { createTheme, PaletteMode } from "@mui/material";
import { amber, grey, deepOrange } from "@mui/material/colors";
import React from "react";

function ThemesProvider({ children }: any) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemesProvider;


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
         
        }),
  },
  typography: {
    fontFamily: ["Cabin", "Roboto", "sans-serif"].join(","),
  },
});

const themes = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: "#222654",
      light: "",
    },
    secondary: {
      main: "#bcc0ea",
      light: "",
    },
  },
  typography: {
    fontFamily: ["Cabin", "Roboto", "sans-serif"].join(","),
  },
});
