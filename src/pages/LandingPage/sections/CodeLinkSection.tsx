import { Box, Heading, PageContent, Text } from "grommet";
import { Code, Github } from "grommet-icons";
import { HEADER0, POP1 } from "../../../shared/colors";
import { Line } from "./Line";

export function CodeLinkSection() {
  return (
    <div>
      <PageContent>
        <Heading color={"header"} size="small">
          Repositories
        </Heading>
        <Line/>
        <br/>
        <Box>
          If you're curious.
          <br />
          <ul>
            <li>
              <Github />
              &nbsp;&nbsp;
              <a href="https://github.com/tedinspace">
                <Text size="large">TedInSpace</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={"header"}>you can find all of my (public) repositories here.</Text>
              </i>
            </li>
            <li>&nbsp;</li>
            <li>
              <Code />
              &nbsp;&nbsp;
              <a href="https://github.com/tedinspace/tedinspace.github.io">
                <Text size="large">Source Code</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={"header"}>The source code of this website.</Text>
              </i>
            </li>
          </ul>
        </Box>
      </PageContent>
    </div>
  );
}
