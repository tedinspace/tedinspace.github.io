import { Box, Card, CardBody, Text } from "grommet";

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
        key={props.title}
        border={
          {
            side:"all",
            color:"bar_body",
            size:"3px"
          }
        }
        
        onClick={() => {
          window.open(props.link);
        }}
      >
        <CardBody pad="small">
          <Box gap="small" align="center" direction="row" pad="small">
            {props.icon}
            <Box pad={"xxsmall"} style={{paddingLeft:10}}>
              <Text size={"large"} weight="bold" color={"header"}>
                {props.title}
              </Text>
              <Text color={"header"} size={"medium"}>
                {props.description}
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
