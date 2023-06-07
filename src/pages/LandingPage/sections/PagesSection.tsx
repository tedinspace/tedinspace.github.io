import { Heading, PageContent, Box, Text } from "grommet";
import { Clock, Link, Send } from "grommet-icons";
import { HEADER0, POP1 } from "../../../shared/colors";

export function PagesSection() {
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          Pages
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <br/>
        <Box >
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
              <Link />
              &nbsp;&nbsp;
              <a href="https://tedsite.com/links/">
                <Text size="large">Curated Links</Text>
              </a>
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
              <a href="https://tedsite.com/contact/">
                <Text size="large">Contact Me</Text>
              </a>
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
