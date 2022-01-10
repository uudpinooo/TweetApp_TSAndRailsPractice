/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";

export const Signin = () => {
  return (
    <div css={signinStyle}>
      <input type="text" placeholder="メールアドレス" css={inputStyle} />
      <input type="text" placeholder="パスワード" css={inputStyle} />
      <div css={buttonStyle}>ログイン</div>
      <br />
      <p>
        アカウント新規作成は<a href="" css={linkStyle}>こちら</a>
      </p>
    </div>
  );
};

const signinStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const inputStyle = css`
  width: 30%;
  height: 2rem;
  padding: 5px 10px;
  margin-bottom: 2rem;
  border: none;
  border-radius: 30px;
`;

const buttonStyle = css`
  width: calc(30% + 10px);
  height: 2rem;
  border: 5px solid ${COLORS.MAIN};
  border-radius: 30px;
  background-color: ${COLORS.MAIN};
  color: ${COLORS.TEXT};
  text-align: center;
  line-height: 2rem;
`;

const linkStyle = css`
  color: ${COLORS.MAIN};
`;