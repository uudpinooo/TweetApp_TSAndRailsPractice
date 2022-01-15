/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { Fragment, VFC } from "react";
import { COLORS } from "style_constants";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProfileImage } from "components/ui-library/ProfileImage";
import profileImage from "images/image1.jpg";

export const HomeContent: VFC = () => {
  return (
    <Fragment>
      {[1, 2, 3, 4, 5].map((x) => {
        return (
          <div key={x} css={tweetStyle}>
            <div css={imageContainerStyle}>
              <ProfileImage imageSize="small" profileImage={profileImage} />
            </div>
            <div css={contentStyle}>
              <p>ユーザーネーム</p>
              <p>
                今日は浜松にいって餃子とスタバを食べました。みんなに会えて嬉しかったです。また来年もあつまれたらいいなあ😊明日は特に予定がないのでゆっくりします！
              </p>
              <p>2021/12/30 22:00</p>
              <p>
                <IconButton>
                  <FavoriteIcon css={buttonStyle} />
                </IconButton>
                5いいね
              </p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

const tweetStyle = css`
  display: flex;
  border-bottom: ${COLORS.BORDER} 1px solid;
  min-height: 100px;
  padding: 20px;
  justify-content: space-between;
`;

const imageContainerStyle = css`
  flex: 1;
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 5;
`;

const buttonStyle = css`
  color: red;
`;
