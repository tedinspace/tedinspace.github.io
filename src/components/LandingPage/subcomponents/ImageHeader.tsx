import { Box, Image } from "grommet";
import React from "react";
import { DARK5 } from "../..";

export function ImageHeader() {
  return (
    <Box style={{ height: "25%", borderBottom: "1px solid " + DARK5 }}>
      <Image src="/tarantula.jpeg" fit="cover" />
    </Box>
  );
}
