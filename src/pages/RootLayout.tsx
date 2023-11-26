import { Box, Page } from "grommet";
import { ImageHeader } from "./LandingPage/subcomponents/ImageHeader";
import { PageFooter } from "./LandingPage/subcomponents/PageFooter";
import { CodeLinkSection } from "./LandingPage/sections/CodeLinkSection";
import { AboutSection } from "./LandingPage/sections/AboutSection";
import { PagesSection } from "./LandingPage/sections/PagesSection";
import { BottomPad } from "./LandingPage/subcomponents/BottomPad";
import { WidgetsSection } from "./LandingPage/sections/WidgetsSection";
function RootLayout() {
  return (
    <Box fill background={"background"} overflow="none">
      <div>
        <ImageHeader />
        <Page>
          <AboutSection />
          <WidgetsSection/>
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
