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
        <Route path="/links" element={<LinksPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </Grommet>
  );
}

export default App;

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }
let theme = {
  themeMode: 'dark',

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
        elevation: 'large',
      },
    },
    container: {
      elevation: 'medium',
      extend: `transition: all 0.2s ease-in-out;`,
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#00000008',
    },
  },
};
