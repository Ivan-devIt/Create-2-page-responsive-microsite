import { FC } from "react";
import { ErrorMessage, InputWrapper } from "../styles/components/Form.styles";

type InputValueType = {
  value: string | number;
  isDirty: boolean;
  isError: (string | null)[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
};

type InputProps = {
  inputValue: InputValueType;
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
};

const Input: FC<InputProps> = ({
  inputValue,
  type,
  name,
  required,
  placeholder,
}) => {
  return (
    <InputWrapper>
      {inputValue.isDirty && inputValue.isError && (
        <ErrorMessage>{inputValue.isError[0]}</ErrorMessage>
      )}

      <input
        value={inputValue.value}
        onChange={inputValue.onChange}
        onBlur={inputValue.onBlur}
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
      />
    </InputWrapper>
  );
};

export default Input;
