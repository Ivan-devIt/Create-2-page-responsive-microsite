import { useState } from "react";
import { IValidations } from "../types";
import { useValidation } from "./useValidation";

export const useInput = (
  initialValue: string | number,
  validations: IValidations
) => {
  const [value, setValue] = useState<string | number>(initialValue);
  const [isDirty, setDirty] = useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, setValue, ...valid };
};
