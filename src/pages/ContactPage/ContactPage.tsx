import {
  Box,
  Text,
} from "grommet";
import ScrapeResistantCopy from "./ScrapeResistantCopy";

function ContactPage() {
 
  return (
    <Box fill pad="medium">
      <Text size="xxlarge" color="orange">
        Contact Me
      </Text>
      <br/>
      <ScrapeResistantCopy/>
      
    </Box>
  );
}

export default ContactPage;
