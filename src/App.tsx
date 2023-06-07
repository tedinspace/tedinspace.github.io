import { Grommet } from "grommet";
import RootLayout from "./pages/RootLayout";
import { Routes, Route } from "react-router-dom";
import { TedHead } from "./shared/TedHead";
import ContactPage from "./pages/ContactPage/ContactPage";
import { DARK4, POP0, POP1, POP2, TED } from "./shared/colors";
import { LinksPage } from "./pages/LinksPage/LinksPage";
function App() {
  return (
    <Grommet full theme={theme}>
      <TedHead />
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </Grommet>
  );
}

export default App;

let theme = {
  themeMode: "dark",
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont,
           "Segoe UI"`,
    },
    active: {
      background: { color: "#C5CBD3", opacity: 1 },
    },
    selected: {
      background: { color: POP0 },
    },
    hover: {
      background: { color: POP2 },
    },
    focus: {
      border: {
        color: TED,
      },
    },
  },
  button: {
    hover: {
      background: { color: TED },
    },
    default: {
      background: {
        color: DARK4,
      },
    },
  },
  select: { icons: { color: POP2 } },
  clock: {
    analog: {
      hour: {
        color: TED,
      },
      minute: {
        color: POP1,
      },
      second: {
        color: POP2,
      },
    },
  },
  card: {
    hover: {
      container: {
        elevation: "large",
      },
    },
    container: {
      elevation: "medium",
      extend: `transition: all 0.2s ease-in-out;`,
    },
    footer: {
      pad: { horizontal: "medium", vertical: "small" },
      background: "#00000008",
    },
  },
};
