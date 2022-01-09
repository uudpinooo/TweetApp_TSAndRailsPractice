/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";

export const FollowingMenus = () => {
  return (
    <div css={menusStyle}>
      <div css={menuStyle(true)} className="selected">
        フォロー中
      </div>
      <div css={menuStyle(false)}>フォロワー</div>
    </div>
  );
};

const menusStyle = css`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

const menuStyle = (isSelected?: boolean) => css`
  border-bottom: ${isSelected ? `${COLORS.MAIN} 5px solid ` : null};
  opacity: ${isSelected ? 1 : 0.6};
  padding: 10px 0;
`;
