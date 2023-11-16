import { Text } from "grommet";

export function PageFooter() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "right",
      }}
    >
      <Text color={"orange_medium"}>
        <i>© {new Date().getFullYear()} TedInSpace</i>&nbsp;&nbsp;&nbsp;
      </Text>
    </div>
  );
}
