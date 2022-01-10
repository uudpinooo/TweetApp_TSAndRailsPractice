/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { HomeContent } from "./HomeContent";
import { HomeMenus } from "./HomeMenus";
import { HomeProfile } from "./HomeProfile";

export const Home = () => {
  return (
    <div css={homeStyle}>
      <HomeProfile />
      <HomeMenus />
      <HomeContent />
    </div>
  );
};

const homeStyle = css`
  border: ${COLORS.BORDER} 1px solid;
  width: 45%;
`;
