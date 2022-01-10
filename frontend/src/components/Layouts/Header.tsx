/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div css={headerStyle}>
      <div css={menusStyle}>
        <Link to="/">ヘッダー</Link>
        <Link to="/followings">フォロー中</Link>
        <Link to="/followers">フォロワー</Link>
        <Link to="/signin">サインイン</Link>
        <Link to="/signup">サインアップ</Link>
      </div>
    </div>
  );
};

const headerStyle = css`
  color: ${COLORS.TEXT};
  background-color: ${COLORS.MAIN};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const menusStyle = css`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
