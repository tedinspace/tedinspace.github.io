import React from "react";
import { Header, Box,Text } from "grommet";
import { Deploy } from "grommet-icons";
import { POP0, DARK1, LIGHT0 } from "../..";

export function PageHeader() {
  return   <Header
  pad="small"
  background={POP0}
  style={{
    borderBottom: "2px solid "+DARK1,
  }}
>
  <Box direction="row">
    <Deploy size="medium" color={LIGHT0} />
    &nbsp;&nbsp;
    <Text size="large">
      <b>TedSite</b>
      <i>.com</i>
    </Text>
  </Box>
</Header>
}
