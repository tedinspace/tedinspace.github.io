import { Header, Box, Text } from "grommet";
import { Deploy, Github, Home } from "grommet-icons";
import { POP0, DARK1, LIGHT0, TED } from "../..";

export function PageHeader() {
  return (
    <Header
      pad="small"
      background={POP0}
      style={{
        borderBottom: "2px solid " + DARK1,
      }}
    >
      <Box direction="row">
        <a href="http://tedsite.com">
          <Deploy size="medium" color={LIGHT0} />
        </a>
        &nbsp;&nbsp;
        <Text size="large">
          <b>
            <span style={{ color: TED }}>Ted</span>Site
          </b>
          <i>.com</i>
        </Text>
      </Box>
      <Box direction="row">
        <a href="http://tedsite.com">
          <Home />
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/tedinspace">
          <Github />
        </a>
      </Box>
    </Header>
  );
}
