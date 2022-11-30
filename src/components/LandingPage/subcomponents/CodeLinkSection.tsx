import { Heading, PageContent, Paragraph, Text } from "grommet";
import { Code, Github } from "grommet-icons";
import React from "react";
import { HEADER0, POP1 } from "../..";

export function CodeLinkSection() {
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          Repositories
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <Paragraph>
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
                <Text color={HEADER0}>you can find all of my (public) repositories here.</Text>
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
                <Text color={HEADER0}>The source code of this website.</Text>
              </i>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
        </Paragraph>
      </PageContent>
    </div>
  );
}
