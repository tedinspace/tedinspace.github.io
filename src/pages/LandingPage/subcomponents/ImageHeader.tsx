import { Box, Image } from "grommet";
import { CircleInformation } from "grommet-icons";
export function ImageHeader() {
  return (
    <Box
      style={{
        height: "250px",
        position: "relative",
      }}
      border={{ color: "bar_body", size: "2px", side: "bottom" }}
    >
      <Image src="/tarantula.jpeg" fit="cover" />
      <Box style={{ position: "absolute", right: 0, bottom: 0 }}>
        <a href="https://en.wikipedia.org/wiki/Tarantula_Nebula">
          <CircleInformation size="medium" color={"orange_light"} />
        </a>
      </Box>
    </Box>
  );
}
