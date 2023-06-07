import { Heading, PageContent, Box, Text } from "grommet";
import { Clock, Link as GLink, Send } from "grommet-icons";
import { HEADER0, POP1 } from "../../../shared/colors";
import { Link } from "react-router-dom";

export function PagesSection() {
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          Pages
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <br />
        <Box>
          adding things as I can!
          <br />
          <ul>
            <li>
              <Clock />
              &nbsp;&nbsp;
              <a href="https://tedsite.com/what-time-is-it-right-now/">
                <Text size="large">What Time is It Right Now (WTIIRN)</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={HEADER0}>
                  ever want to know what time it is right now in all the time
                  formats I use? Time conversion tool included.
                </Text>
              </i>
            </li>
            <li>
              <br />
            </li>

            <li>
              <GLink />
              &nbsp;&nbsp;
              <Link to="/links">
                <Text size="large">Curated Links</Text>
              </Link>
            </li>
            <li>
              <i>
                <Text color={HEADER0}>
                  an organized list of data sources and code libraries for
                  space-related related research and development--as well as
                  some ReactJS and web-development links.
                </Text>
              </i>
            </li>
            <li>
              <br />
            </li>
            <li>
              <Send />
              &nbsp;&nbsp;
              <Link to="/contact">
                <Text size="large">Contact Me</Text>
              </Link>
            </li>
            <li>
              <i>
                <Text color={HEADER0}>feel free to reach out!</Text>
              </i>
            </li>
          </ul>
        </Box>
      </PageContent>
    </div>
  );
}

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
