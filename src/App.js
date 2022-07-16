// start RTL MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// ended RTL MUI
import { Editor } from "./components";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "shabnam",
  },
  palette: {
    primary: {
      main: '#16C2D2' ,
      light: '#6ce4f0',
      dark: '#14aebd',
    }
  }
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Editor />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
