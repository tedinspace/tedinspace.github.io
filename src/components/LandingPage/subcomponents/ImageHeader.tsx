import React from "react";
import { Box, Image } from "grommet";
import { DARK5 } from "../..";
export function ImageHeader() {
  return (
    <Box style={{ height: "250px", borderBottom: "1px solid " + DARK5 }}>
      <Image src="/tarantula.jpeg" fit="cover" />
    </Box>
  );
}
