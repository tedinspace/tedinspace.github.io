import { Heading, PageContent, Box, Text } from "grommet";
import { Clock, Integration } from "grommet-icons";
import { Line } from "./Line";

export function WidgetsSection() {
  return (
    <div>
      <PageContent>
        <Heading color={"header"} size="small">
          Widgets
        </Heading>
        <Line />
        <br />
        <Box style={{ maxWidth: 480 }}>
          <Text color="header">homegrown applications with very specific purposes</Text>
          <br />
          <ul>
            <li>
              <Integration />
              &nbsp;&nbsp;
              <a href="https://tedsite.com/convolve/">
                <Text size="large">Convolution Calculator</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={"body_text"}>
                  Numerically solves convolution integrals for specified functions
                </Text>
              </i>
            </li>
            <li>
              <br />
            </li>
            <li>
              <Clock />
              &nbsp;&nbsp;
              <a href="https://tedsite.com/what-time-is-it-right-now/">
                <Text size="large">What Time is It Right Now</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={"body_text"}>
                  Ever want to know what time it is right now in all the time
                  formats I use? Time conversion tool included.
                </Text>
              </i>
            </li>
          </ul>
        </Box>
      </PageContent>
    </div>
  );
}
