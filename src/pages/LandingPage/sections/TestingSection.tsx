import { Box, Heading, PageContent } from "grommet";
import {
  Apple,
  Chrome,
  Firefox,
  SafariOption,
  Subtract,
  Windows,
} from "grommet-icons";
import { HEADER0, POP1 } from "../../../shared/colors";

export function TestingSection() {
  const W = "33px";
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          <i>Note</i>
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <br />
        <Box color={HEADER0}>
          <Box direction="row">
            <Subtract size="small" />
            &nbsp; This website was tested on the following:
            <br />
            <ul>
              <li>
                <Box direction="row">
                  <Chrome color="plain" size={W} />
                  <Divider />
                  <Firefox color="plain" size={W} />
                  <Divider />
                  <SafariOption color="plain" size={W} />
                </Box>
              </li>
            </ul>
          </Box>
          <Subtract size="small" />
          &nbsp;across the following:
          <br />
          <ul>
            <li>
              <Box direction="row">
                <Apple color="plain" size={W} />
                <Divider />
                <Windows color="plain" size={W} />
              </Box>
            </li>
          </ul>
          <Subtract size="small" />
          &nbsp;mobile compatibility secondary but eventual
        </Box>
      </PageContent>
    </div>
  );
}

const Divider = () => {
  return <div style={{ width: 25 }} />;
};
