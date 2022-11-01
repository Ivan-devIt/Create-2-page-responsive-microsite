import styled from "styled-components";
import { media } from "../media";
import { baseTheme } from "../theme";

const {
  colors: { whiteSecondary, gray, primary, danger },
} = baseTheme;

export const FormWrapper = styled.form`
  margin: 0 auto;
  display: grid;
  gap: 20px;
  width: 500px;
  padding: 30px 20px;
  border-radius: 5px;
  background-color: ${primary};
  box-shadow: 3px 3px 6px ${gray};

  h2 {
    color: ${whiteSecondary};
  }

  ${media.lessThan("sm")`
     width: 100%;
  `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-left: auto;

  & > div {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;

export const InputWrapper = styled.div`
  span {
    color: ${danger};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: bold;
    text-shadow: 0 0 1px black;
  }

  input {
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${whiteSecondary};
    box-shadow: 3px 3px 6px ${gray};
    width: 100%;
  }
`;

export const StatesSelectWrapper = styled.div`
  width: 100%;

  select {
    padding: 10px 15px;
    border-radius: 5px;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  color: ${danger};
  font-size: 1.6rem;
  font-style: italic;
  font-weight: bold;
  text-shadow: 0 0 1px black;
`;
