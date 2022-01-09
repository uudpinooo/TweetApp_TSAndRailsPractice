/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { Followers } from "../Followers/Followers";
import { FollowersMenus } from "../Followers/FollowersMenus";
import { Header } from "../Layouts/Header";

export const FollowersPage = () => {
  return (
    <div css={pageStyle}>
      <Header />
      <FollowersMenus />
      <Followers />
    </div>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.BACKGROUND_COLOR};
  color: ${COLORS.TEXT};
  width: 100%;
  min-height: 100vh;
`;
