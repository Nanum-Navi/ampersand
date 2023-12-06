import { css } from "styled-components";
import { normalize } from "styled-normalize";

const globalStyle = css`
  @font-face {
    font-family: SBAggroB;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
  }

  @font-face {
    font-family: SBAggroM;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff")
      format("woff");
  }

  @font-face {
    font-family: SBAggroL;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroL.woff")
      format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 900;
    font-display: swap;
    src: local("Pretendard Black"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Black.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Black.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-ExtraBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-ExtraBold.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Bold.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-SemiBold.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Medium.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Regular.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Light.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Light.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 200;
    font-display: swap;
    src: local("Pretendard ExtraLight"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-ExtraLight.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-ExtraLight.woff")
        format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 100;
    font-display: swap;
    src: local("Pretendard Thin"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff2/Pretendard-Thin.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/web/static/woff/Pretendard-Thin.woff")
        format("woff");
  }

  ${normalize}

  :root {
    --vh: 100%;
  }

  * {
    -webkit-user-select: none;
    user-select: none;
    scrollbar-width: none;

    box-sizing: border-box;

    font-size: 62.5%;
    -webkit-text-size-adjust: none;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  body {
    font-family: Pretandard, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button,
  ul,
  li,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;

    background: ${({ theme }) => theme.color.white};
    border: none;
    outline: none;
  }

  input,
  textarea {
    font-size: 16px;

    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
  }

  select {
    font-size: 16px;

    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    -webkit-border-radius: 0;
    border-radius: 0;
    outline: none;
  }
`;

export default globalStyle;
