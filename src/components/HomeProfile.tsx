/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";

export const HomeProfile = () => {
  return (
    <div css={profileStyle}>
      <div css={imageContainerStyle}>
        <div css={imageStyle}></div>
      </div>
      <div css={infoStyle}>
        <p>ユーザーネーム</p>
        <p>1000フォロー</p>
        <p>1000フォロワー</p>
      </div>
    </div>
  );
};

const profileStyle = css`
  display: flex;
  height: 160px;
  padding: 30px;
  justify-content: space-between;
`;

const imageContainerStyle = css`
  flex: 1;
`;

const imageStyle = css`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: skyblue;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
`;
