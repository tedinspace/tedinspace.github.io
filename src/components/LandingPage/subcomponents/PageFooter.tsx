import React from "react";
import { DARK3, DARK1, POP1 } from "../..";
import { Text } from "grommet";
import { Image } from "grommet-icons";

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
        <a href="https://en.wikipedia.org/wiki/Tarantula_Nebula">
          <Image size="small" />
        </a>
        &nbsp;
      </Text>
    </div>
  );
}
