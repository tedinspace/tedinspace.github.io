import React from "react";
import { DARK3, DARK1, POP1 } from "../..";
import { Text } from "grommet";

export function PageFooter() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "right",
        borderTop: "1px solid " + DARK3,
        background: DARK1,
      }}
    >
      <Text color={POP1}>
        <i>© Copyright 2022</i>&nbsp;&nbsp;
        &nbsp;
      </Text>
    </div>
  );
}
