import { Box, Heading, PageContent, Paragraph } from "grommet";
import {
  Apple,
  Chrome,
  Firefox,
  SafariOption,
  Subtract,
  Windows,
} from "grommet-icons";
import React from "react";
import { HEADER0, POP1 } from "../..";

export function TestingSection() {
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
                <Chrome color="plain" size="large" />
                <div style={{ width: 25 }} />
                <Firefox color="plain" size="large" />
                <div style={{ width: 25 }} />
                <SafariOption color="plain" size="large" />
              </Box>
            </li>
          </ul>
          <Subtract size="small" />
          &nbsp;across the following:
          <br />
          <ul>
            <li>
              <Box direction="row">
                <Apple color="plain" size="large" />
                <div style={{ width: 25 }} />
                <Windows color="plain" size="large" />
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
