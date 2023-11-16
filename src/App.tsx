import { Box, Grommet, grommet } from "grommet";
import RootLayout from "./pages/RootLayout";
import { Routes, Route } from "react-router-dom";
import { TedHead } from "./shared/TedHead";
import ContactPage from "./pages/ContactPage/ContactPage";
import { LinksPage } from "./pages/LinksPage/LinksPage";
import { Page404 } from "./pages/Page404/Page404";
import { deepMerge } from "grommet/utils";
import { theme } from "./shared/theme";
import React from "react";

const theme_merged = deepMerge(grommet, theme);

function App() {
  const [darkMode, toggleDarkLight] = React.useState(false);
  return (
    <Grommet
      full
      theme={theme_merged}
      id="scroller"
      themeMode={darkMode ? "dark" : "light"}
    >
      <Box fill>
        <TedHead
          darkMode={darkMode}
          toggleDarkLight={() => {
            toggleDarkLight(!darkMode);
          }}
        />
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Box>
    </Grommet>
  );
}

export default App;
