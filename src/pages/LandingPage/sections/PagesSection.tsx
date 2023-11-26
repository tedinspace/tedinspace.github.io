import { Heading, PageContent, Box, Text } from "grommet";
import {
  Link as GLink,
  Send,
  Workshop,
} from "grommet-icons";
import { Link } from "react-router-dom";
import { Line } from "./Line";

export function PagesSection() {
  return (
    <div>
      <PageContent>
        <Heading color={"header"} size="small">
          Pages
        </Heading>
        <Line />
        <br />
        <Box style={{ maxWidth: 480 }}>
          <Text color="header">an assortment of things</Text>
          <br/>
          <ul>
            <li>
              <GLink />
              &nbsp;&nbsp;
              <Link to="/links">
                <Text size="large">Curated Links</Text>
              </Link>
            </li>
            <li>
              <i>
                <Text color={"body_text"}>
                  An organized list of data sources and code libraries for
                  space-related research and development--as well as some
                  ReactJS and web-development links.
                </Text>
              </i>
            </li>
            <li>
              <br />
            </li>
            <li>
              <Workshop />
              &nbsp;&nbsp;
              <Link to="/webworkers">
                <Text size="large">Tutorial: Web Workers in ReactJS</Text>
              </Link>
            </li>
            <li>
              <i>
                <Text color={"body_text"}>
                  The short yet comprehensive crash course on multi-threading in
                  ReactJS that I needed a year ago but couldn't find.
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
                <Text color={"body_text"}>
                  Bug report? Something on your mind? Feel free to reach out!
                </Text>
              </i>
            </li>
          </ul>
        </Box>
      </PageContent>
    </div>
  );
}
