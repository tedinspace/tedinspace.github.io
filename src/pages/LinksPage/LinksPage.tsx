import { useState, useEffect } from "react";
import { Box } from "grommet";
import { ColumnContent } from "./subcomponents/Data";
import { LinkColumn } from "./subcomponents/LinkColumn";

export function LinkGrid() {
  /* state management */
  const [width, setWindowWidth] = useState(0); // hooks
  useEffect(() => {
    updateDimensions(); // initial width call
    window.addEventListener("resize", updateDimensions); // listener
    return () => window.removeEventListener("resize", updateDimensions); // on unmount
  }, []);
  /**
   * state update
   */
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return <Box fill overflow={"auto"}> <ColumnDivision width={width} /></Box>;
}
const desiredWidth: number = 800;
function ColumnDivision(props: { width: number }) {
  if (props.width < desiredWidth) {
    return <LinkColumn columnContent={ColumnContent.sections} />;
  } else if (props.width < desiredWidth * 2) {
    return (
      <Box fill direction="row">
        <Box fill>
          <LinkColumn columnContent={[ColumnContent.sections[0]]} />
          <LinkColumn columnContent={[ColumnContent.sections[1]]} />
          <LinkColumn columnContent={[ColumnContent.sections[2]]} />
        </Box>
        <Box fill>
          <LinkColumn columnContent={[ColumnContent.sections[3]]} />
          <LinkColumn columnContent={[ColumnContent.sections[4]]} />
          <LinkColumn columnContent={[ColumnContent.sections[5]]} />
        </Box>
      </Box>
    );
  }
  return (
    <Box fill direction="row">
      <Box fill>
        <LinkColumn columnContent={[ColumnContent.sections[0]]} />
        <LinkColumn columnContent={[ColumnContent.sections[1]]} />
      </Box>
      <Box fill>
        <LinkColumn columnContent={[ColumnContent.sections[2]]} />
        <LinkColumn columnContent={[ColumnContent.sections[3]]} />
      </Box>
      <Box fill>
        <LinkColumn columnContent={[ColumnContent.sections[4]]} />
        <LinkColumn columnContent={[ColumnContent.sections[5]]} />
      </Box>
    </Box>
  );
}
