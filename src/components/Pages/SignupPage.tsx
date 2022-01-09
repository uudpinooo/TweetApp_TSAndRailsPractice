/** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { Signup } from "../Signup/Signup";

export const SignupPage = () => {
  return (
    <div css={pageStyle}>
      <Signup />
    </div>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.BACKGROUND_COLOR};
  color: ${COLORS.TEXT};
  width: 100%;
  min-height: 100vh;
`;
