/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { Fragment, VFC } from "react";
import { COLORS, IMAGE_SIZE } from "style_constants";

export const Followings: VFC = () => {
  return (
    <Fragment>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
        return (
          <div key={x} css={profileStyle}>
            <div css={imageContainerStyle}>
              <div css={imageStyle}></div>
            </div>
            <div css={infoStyle}>
              <p>ユーザーネーム</p>
              <p>フォローをはずす</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

const profileStyle = css`
  display: flex;
  width: 40%;
  height: 80px;
  padding: 15px;
  justify-content: space-between;
  border: ${COLORS.BORDER} 1px solid;
`;

const imageContainerStyle = css`
  flex: 1;
`;

const imageStyle = css`
  width: ${IMAGE_SIZE.SMALL}px;
  height: ${IMAGE_SIZE.SMALL}px;
  border-radius: 50%;
  background-color: skyblue;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
`;
