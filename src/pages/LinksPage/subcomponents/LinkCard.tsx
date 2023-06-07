import { Box, Card, CardBody, Text } from "grommet";
import { DARK3, DARK0 } from "../../../shared/colors";

export interface ILinkCard {
  title: string;
  description: string;
  icon: any;
  link: string;
}
export function LinkCard(props: ILinkCard) {
  return (
    <Box margin={"xsmall"} >
      <Card
        style={{ border: "1px solid " + DARK3 }}
        background={DARK0}
        elevation="xlarge"
        key={props.title}
        onClick={() => {
          window.open(props.link);
        }}
      >
        <CardBody pad="small">
          <Box gap="small" align="center" direction="row" pad="small">
            {props.icon}
            <Box pad={"xxsmall"} style={{paddingLeft:10}}>
              <Text size={"large"} weight="bold" color={"#C5CBD3"}>
                {props.title}
              </Text>
              <Text color={"#ABB3BF"} size={"medium"}>
                {props.description}
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
