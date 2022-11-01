import { useEffect, useState } from "react";
import { IValidations } from "../types";

export const useValidation = (value: any, validations: IValidations) => {
  const [isEmpty, setEmpty] = useState<string | null>(null);
  const [minLengthError, setMinLengthError] = useState<string | null>(null);
  const [maxLengthError, setMaxLengthError] = useState<string | null>(null);
  const [onlySymbol, setOnlySymbol] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [isZipCode, setIsZipCode] = useState<string | null>(null);

  const isError: (string | null)[] = [
    isEmpty,
    minLengthError,
    maxLengthError,
    onlySymbol,
    filter,
    isZipCode,
    email,
  ].filter((el) => el);

  /*eslint-disable */
  const emailRegexValidation =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  /*eslint-enable */

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty("") : setEmpty("Field must be not empty");
          break;

        case "minLength":
          value.length >= validations[validation]!
            ? setMinLengthError(null)
            : setMinLengthError(
                `The field must have a minimum of ${validations[validation]} characters`
              );
          break;

        case "maxLength":
          value.length <= validations[validation]!
            ? setMaxLengthError(null)
            : setMaxLengthError(
                `The field must have a maximum of ${validations[validation]} characters`
              );
          break;

        case "onlySymbol":
          /^[a-zA-Z]+$/.test(value)
            ? setOnlySymbol(null)
            : setOnlySymbol(`The field must have only symbols`);
          break;

        case "filter":
          /^[a-zA-Z](?:['\-a-zA-Z]*[a-zA-Z])$/.test(value)
            ? setFilter(null)
            : setFilter(
                `The field must have only characters hyphens and apostrophes`
              );
          break;

        case "isEmail":
          emailRegexValidation.test(value)
            ? setEmail(null)
            : setEmail(`Please enter valid email`);
          break;

        case "isZipCode":
          /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
            ? setIsZipCode(null)
            : setIsZipCode(`The field must be Zip Code`);
          break;
      }
    }
  }, [value, validations, emailRegexValidation]);

  return { isError };
};
