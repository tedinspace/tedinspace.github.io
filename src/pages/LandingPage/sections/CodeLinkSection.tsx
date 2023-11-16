import { Box, Heading, PageContent, Text } from "grommet";
import { Code, Github } from "grommet-icons";
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
          <Text color="header">If you're curious.</Text>
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
                <Text color={"body_text"}>you can find all of my (public) repositories here.</Text>
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
                <Text color={"body_text"}>The source code of this website.</Text>
              </i>
            </li>
          </ul>
        </Box>
      </PageContent>
    </div>
  );
}
