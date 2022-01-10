/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { IMAGE_SIZE } from "style_constants";

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
  width: ${IMAGE_SIZE.LARGE}px;
  height: ${IMAGE_SIZE.LARGE}px;
  border-radius: 50%;
  background-color: skyblue;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
`;
