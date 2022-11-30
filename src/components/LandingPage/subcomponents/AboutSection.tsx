import React from "react";
import { PageContent, Heading, Paragraph } from "grommet";
import { HEADER0, POP1, TED } from "../..";

export function AboutSection() {
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          About
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <Paragraph>
          My name is <span style={{color:TED}}>Ted</span>, and this is my site.
          <br /> <br />
          I'm a professional programmer, who works in and is passionate about
          space systems. I love building things and often have ideas for useful
          tools and little widgets related to space systems and situational
          awareness.
          <br />
          My intention for this website is to serve as a landing page for
          anything I'm developing.
          <br />
          <br />
          I hope you enjoy perusing my stuff!
          <br />
          <br />
          <div style={{ color: TED }}>- Ted</div>
        </Paragraph>
      </PageContent>
    </div>
  );
}
