/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../style_constants";
import { HomeContent } from "./HomeContent";
import { HomeProfile } from "./HomeProfile";

export const Home = () => {
  return (
    <div css={homeStyle}>
      <HomeProfile />
      <HomeContent />
    </div>
  );
};

const homeStyle = css`
  border: ${COLORS.BORDER} 1px solid;
  width: 45%;
`;