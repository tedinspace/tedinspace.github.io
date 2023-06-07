import { Box, Page } from "grommet";
import { DARK0 } from "../shared/colors";
import { ImageHeader } from "./LandingPage/subcomponents/ImageHeader";
import { PageFooter } from "./LandingPage/subcomponents/PageFooter";
import { CodeLinkSection } from "./LandingPage/sections/CodeLinkSection";
import { AboutSection } from "./LandingPage/sections/AboutSection";
import { PagesSection } from "./LandingPage/sections/PagesSection";
import { BottomPad } from "./LandingPage/subcomponents/BottomPad";
function RootLayout() {
  return (
    <Box fill background={DARK0} overflow="none">
      <div>
        <ImageHeader />
        <Page>
          <AboutSection />
          <PagesSection />
          <CodeLinkSection />
          <BottomPad />
        </Page>
      </div>
      <PageFooter />
    </Box>
  );
}

export default RootLayout;
