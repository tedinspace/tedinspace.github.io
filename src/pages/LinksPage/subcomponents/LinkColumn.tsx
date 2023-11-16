import { Box, Text } from "grommet";
import { ILinkCard, LinkCard } from "./LinkCard";
import _ from "lodash";
import { FormNext } from "grommet-icons";
import { ISection } from ".";
interface IProps {
  columnContent: ISection[];
}
export function LinkColumn(props: IProps) {
  return (
    <div>
      <Box>
        {_.map(props.columnContent, (section: ISection) => {
          return LinkColumnSection(section.sectionTitle, section.links);
        })}
      </Box>
    </div>
  );
}

function LinkColumnSection(title: string, links: ILinkCard[]) {
  return (
    <Box key={title}>
      <Box pad="small" direction="row">
        <FormNext size="27px" />
        &nbsp;&nbsp;
        <Text color={"header"} size="large">
          <b>{title}</b>
        </Text>
      </Box>
      {_.map(links, (link: ILinkCard) => {
        return <LinkCard {...link} key={link.title} />;
      })}
    </Box>
  );
}
