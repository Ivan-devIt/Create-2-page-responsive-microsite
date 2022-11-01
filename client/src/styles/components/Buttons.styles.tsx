import styled, { css } from "styled-components";
import { baseTheme } from "../theme";

const {
  colors: {
    success,
    whiteSecondary,
    successSecondary,
    yellow,
    yellowSecondary,
    gray,
  },
  durations: { ms300 },
} = baseTheme;

const baseBtnStyle = css`
  padding: 10px 15px;
  min-width: 100px;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  outline: none;
  border: none;
  text-transform: uppercase;
  transition: background-color ${ms300}ms linear;
  box-shadow: 3px 3px 6px ${gray};
  cursor: pointer;

  &:disabled {
    background-color: ${gray};
  }
`;

export const SubmitBtnWrapper = styled.div`
  button {
    ${baseBtnStyle};
    background-color: ${success};
    color: ${whiteSecondary};

    &:hover,
    &:focus {
      background-color: ${successSecondary};

      &:disabled {
        background-color: ${gray};
      }
    }
  }
`;

export const ResetBtnWrapper = styled.div`
  button {
    ${baseBtnStyle};
    background-color: ${yellow};
    color: ${whiteSecondary};

    &:hover,
    &:focus {
      background-color: ${yellowSecondary};
    }
  }
`;
