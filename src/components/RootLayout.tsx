import React from "react";
import {
  Box,
  Header,
  Heading,
  Page,
  PageContent,
  Paragraph,
  Text,
  Image,
} from "grommet";
import { Deploy } from "grommet-icons";
function RootLayout() {
  return (
    <Box fill background={"#111418"} overflow="auto">
      <div>
        <Header
          pad="small"
          background={"#913a1d"}
          style={{
            borderBottom: "2px solid #1C2127",
          }}
        >
          <Box direction="row">
            <Deploy size="medium" color="#f0e5e1" />
            &nbsp;&nbsp;
            <Text size="large">
              <b>TedSite</b>
              <i>.com</i>
            </Text>
          </Box>
        </Header>
        <Box style={{ height: "25%", borderBottom: "1px solid #404854" }}>
          <Image src="/tarantula.jpeg" fit="cover" />
        </Box>
        <Box>
          <Page>
            <div>
              <PageContent>
                <Heading color={"#C5CBD3"} size="small">
                  About
                </Heading>
                <div
                  style={{ width: "150px", borderTop: "1px solid #913a1d" }}
                />
                <Paragraph>
                  My name is Ted, and this is my site.
                  <br /> <br />
                  I'm a professional programmer, who works in and is passionate
                  about space systems. I love building things and often have
                  ideas for useful tools and little widgets related to space
                  systems and situational awareness.
                  <br />
                  My intention for this website is to serve as a landing page
                  for anything I'm developing.
                  <br />
                  <br />
                  I hope you enjoy perusing my stuff!
                  <br />
                  <br />- Ted
                </Paragraph>
                {/**
                 *  <Heading size="small">Space Widgets</Heading>
              <Paragraph>
                Here are some widgets I've made for space and space related
                topics.
              </Paragraph>
                 */}
              </PageContent>
            </div>
          </Page>
        </Box>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign:"right",
          borderTop:"1px solid #2F343C",
          background:"#1C2127"
        }}
      >
        <Text color="#c96d4f"><i>© Copyright 2022</i>&nbsp;</Text>
      </div>
    </Box>
  );
}

export default RootLayout;
