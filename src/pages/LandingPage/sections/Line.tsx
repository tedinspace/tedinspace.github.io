import { theme } from "../../../shared/theme";

export function Line() {
  return (
    <div
      style={{
        width: "150px",
        borderTop: "1px solid " + theme.global.colors.orange_medium,
      }}
    />
  );
}
