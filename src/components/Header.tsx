/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { Fragment } from "react";
import { jsx, css } from "@emotion/react";
import { COLORS } from "../style_constants";

export const Header = () => {
  return (
    <Fragment>
      <div css={headerStyle}>ヘッダー</div>
    </Fragment>
  );
};

const headerStyle = css`
  background-color: ${COLORS.MAIN};
  width: 100%;
  height: 60px;
`;
