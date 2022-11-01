import { FC } from "react";
import { SubmitBtnWrapper } from "../../styles/components/Buttons.styles";

interface ISubmitBtnProps {
  text: string;
  disabled: boolean;
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ text, disabled }) => {
  return (
    <SubmitBtnWrapper>
      <button type="submit" disabled={disabled}>
        {text}
      </button>
    </SubmitBtnWrapper>
  );
};

export default SubmitBtn;
