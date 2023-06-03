import React from "react";
import { Box, Page } from "grommet";
import { DARK0 } from "..";
import { TedHead } from "./subcomponents/TedHead";
import { ImageHeader } from "./subcomponents/ImageHeader";
import { AboutSection } from "./subcomponents/AboutSection";
import { PageFooter } from "./subcomponents/PageFooter";
import { CodeLinkSection } from "./subcomponents/CodeLinkSection";
import { PagesSection } from "./subcomponents/PagesSection";
import { TestingSection } from "./subcomponents/TestingSection";
function LandingPage() {
  return (
    <Box fill background={DARK0} overflow="auto">
      <div>
        <TedHead />
        <ImageHeader />
        <Page>
          <AboutSection />
          <PagesSection/>
          <CodeLinkSection/>
          <TestingSection/>
        </Page>
      </div>
      <PageFooter />
    </Box>
  );
}

export default LandingPage;
