import { PageContent, Heading, Paragraph, Text } from "grommet";
import { Line } from "./Line";

export function AboutSection() {
  return (
    <div>
      <PageContent>
        <Heading color={"header"} size="small">
          About
        </Heading>
        <Line/>
        <Paragraph>
          My name is <Text color="logo">Ted</Text>, and this is my
          site.
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
          <Text color="blue">- Ted</Text>
        </Paragraph>
      </PageContent>
    </div>
  );
}
