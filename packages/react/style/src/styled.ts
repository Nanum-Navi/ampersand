import theme from "./theme";

type CustomTheme = typeof theme;
export interface DefaultTheme extends CustomTheme {}

export * from "styled-components";
