/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { ProfileImage } from "components/ui-library/ProfileImage";
import profileImage from "images/image1.jpg";

export const HomeProfile = () => {
  return (
    <div css={profileStyle}>
      <div css={imageContainerStyle}>
        <ProfileImage imageSize="large" profileImage={profileImage} />
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

const infoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
`;
