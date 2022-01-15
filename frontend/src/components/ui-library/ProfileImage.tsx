/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { IMAGE_SIZE } from "style_constants";

export const ProfileImage = (props: { imageSize: string; profileImage: string }) => {
  return <img src={props.profileImage} alt="プロフィール写真" css={imageStyle(props.imageSize)} />;
};

const imageStyle = (imageSize: string) => css`
  width: ${imageSize === "large" ? `${IMAGE_SIZE.LARGE}px` : `${IMAGE_SIZE.SMALL}px`};
  height: ${imageSize === "large" ? `${IMAGE_SIZE.LARGE}px` : `${IMAGE_SIZE.SMALL}px`};
  border-radius: 50%;
`;
