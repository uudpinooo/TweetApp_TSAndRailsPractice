/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../style_constants";

export const HomeMenu = () => {
  return (
    <div css={menusStyle}>
      <div css={menuStyle(true)} className="selected">タイムライン</div>
      <div css={menuStyle(false)}>ツイート</div>
      <div css={menuStyle(false)}>いいね</div>
    </div>
  );
};

const menusStyle = css`
  display: flex;
  justify-content: space-around;
  border-bottom: ${COLORS.BORDER} 1px solid;
`;

const menuStyle = (isSelected?: boolean) => css`
  border-bottom: ${isSelected ? `${COLORS.MAIN} 5px solid `: null};
  opacity: ${isSelected ? 1 : 0.6};
  padding: 10px 0;
`;
