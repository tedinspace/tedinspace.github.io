import React from "react";
import { Box, Page } from "grommet";
import { DARK0 } from "..";
import { TedHead } from "./subcomponents/TedHead";
import { ImageHeader } from "./subcomponents/ImageHeader";
import { AboutSection } from "./subcomponents/AboutSection";
import { PageFooter } from "./subcomponents/PageFooter";
import { CodeLinkSection } from "./subcomponents/CodeLinkSection";
import { WidgetsSection } from "./subcomponents/WidgetsSection";
function LandingPage() {
  return (
    <Box fill background={DARK0} overflow="auto">
      <div>
        <TedHead />
        <ImageHeader />
        <Page>
          <AboutSection />
          <WidgetsSection/>
          <CodeLinkSection/>
        </Page>
      </div>
      <PageFooter />
    </Box>
  );
}

export default LandingPage;
