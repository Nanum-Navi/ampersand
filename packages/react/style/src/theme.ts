const color = {
  white: "#FFFFFF",
  black: "#3c3c32",
  grey: "#999",
  brown: "#503F2D",
  greyBrown: "#5A5050",
  lightYellow: "#FFF4BC",
  yellow01: "#FED146",
  yellow02: "#f5c232",
  red: "#c84628",
  lightPink: "#ffe1d2",
  pink: "#FFC8B4",
  lightGrey: "#f2f2f2",
  medGrey: "#d9d9d9",
} as const;

const newColor = {
  grey: "#B1B7C0",
  grey200: "#FAFAFB",
  grey300: "#F2F3F5",
  grey400: "#E6E9EC",
  grey500: "#C7CFD7",
  grey600: "#8B95A1",
  grey800: "#353D4A",
  black: "#1A1F27",
} as const;

const fontRN = {
  extraBold: "Pretendard-ExtraBold",
  bold: "Pretendard-Bold",
  semiBold: "Pretendard-SemiBold",
  medium: "Pretendard-Medium",
  regular: "Pretendard-Regular",
  aggroBold: "OTSBAggroB",
  aggroLight: "OTSBAggroL",
  aggroMedium: "OTSBAggroM",
} as const;

const font = {
  basic: "Pretendard",
  aggro: {
    bold: "SBAggroB",
    medium: "SBAggroM",
    light: "SBAggroL",
  } as const,
} as const;

// 테마 객체
const theme = {
  color,
  newColor,
  fontRN,
  font,
};

export default theme;
