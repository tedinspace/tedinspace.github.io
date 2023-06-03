import { Box, Heading, PageContent, Paragraph } from "grommet";
import {
  Apple,
  Chrome,
  Firefox,
  SafariOption,
  Subtract,
  Windows,
} from "grommet-icons";
import { HEADER0, POP1 } from "../..";

export function TestingSection() {
  const W = "33px";
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          <i>Note</i>
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <Paragraph color={HEADER0}>
          <Subtract size="small" />
          &nbsp; This website was tested on the following:
          <br />
          <ul>
            <li>
              <Box direction="row">
                <Chrome color="plain" size={W}/>
                <Divider />
                <Firefox color="plain" size={W} />
                <Divider />
                <SafariOption color="plain" size={W} />
              </Box>
            </li>
          </ul>
          <Subtract size="small" />
          &nbsp;across the following:
          <br />
          <ul>
            <li>
              <Box direction="row">
                <Apple color="plain"size={W} />
                <Divider />
                <Windows color="plain" size={W} />
              </Box>
            </li>
          </ul>
          <Subtract size="small" />
          &nbsp;mobile compatibility secondary but eventual
          <br />
          <br />
          <br />
          <br />
        </Paragraph>
      </PageContent>
    </div>
  );
}

const Divider = ()=>{
  return <div style={{ width: 25 }} />
}