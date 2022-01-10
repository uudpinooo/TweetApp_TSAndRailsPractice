/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore TS6133: 'jsx' is declared but its value is never read.

import { jsx, css } from "@emotion/react";
import { COLORS } from "../../style_constants";
import { Header } from "../Layouts/Header";
import { Home } from "../Homes/Home";

export const HomesPage = () => {
  return (
    <div css={pageStyle}>
      <Header />
      <Home />
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
