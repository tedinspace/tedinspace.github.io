import { Box, Image } from "grommet";
import { CircleInformation } from "grommet-icons";
import {  POP2, UPPERBAR0 } from "../../../shared/colors";
export function ImageHeader() {
  return (
    <Box
      style={{
        height: "250px",
        borderBottom: "2px solid " + UPPERBAR0,
        position: "relative",
      }}
    >
      <Image src="/tarantula.jpeg" fit="cover" />
      <Box style={{ position: "absolute", right: 0, bottom: 0 }}>
        <a href="https://en.wikipedia.org/wiki/Tarantula_Nebula">
          <CircleInformation size="medium" color={POP2} />
        </a>
      </Box>
    </Box>
  );
}