/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { Followings } from "../Followings/Followings";
import { FollowingMenus } from "../Followings/FollowingsMenus";
import { Header } from "../Layouts/Header";

export const FollowingsPage = () => {
  return (
    <div css={pageStyle}>
      <Header />
      <FollowingMenus />
      <Followings />
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

const homeStyle = css`
  border: ${COLORS.BORDER} 1px solid;
  width: 45%;
`;
