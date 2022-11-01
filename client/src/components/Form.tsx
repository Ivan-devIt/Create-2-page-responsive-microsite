import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { USStates } from "../utils/data/USStates";
import { useInput } from "../hooks";
import {
  BtnWrapper,
  ErrorMessage,
  FormWrapper,
  StatesSelectWrapper,
} from "../styles/components/Form.styles";
import { Routers } from "../types";
import SubmitBtn from "./Buttons/SubmitBtn";
import Input from "./Input";
import Typography from "./Typography";
import config from "../utils/config";

const Form: FC = () => {
  const navigate = useNavigate();

  const firstName = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 20,
    onlySymbol: true,
  });

  const lastName = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 30,
    filter: true,
  });

  const email = useInput("", {
    isEmail: true,
  });

  const zipCode = useInput("", {
    isZipCode: true,
  });

  const [usState, setUsState] = useState<string | null>(null);
  const [selectError, setSelectError] = useState<boolean>(false);

  const errors = [
    ...firstName.isError,
    ...lastName.isError,
    ...email.isError,
    ...zipCode.isError,
  ];

  !usState && errors.push("Selected state");

  const handleChangeState = (state: string) => {
    if (state === "Choose a state") {
      setSelectError(true);
      return setUsState(null);
    }

    setSelectError(false);
    setUsState(state);
  };

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    zipCode: zipCode.value,
    usState,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Axios.post(`${config.url}/contact`, { ...formData })
      .then((res) => {
        console.log(formData);
        navigate(Routers.THANKS);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Typography tag="h2" text="Fill out your information" />

      <Input
        inputValue={firstName}
        placeholder={"First name"}
        type={"string"}
        name={"firstName"}
        required={true}
      />

      <Input
        inputValue={lastName}
        placeholder={"Last name"}
        type={"string"}
        name={"lastName"}
        required={true}
      />

      <Input
        inputValue={email}
        placeholder={"Email"}
        type={"string"}
        name={"email"}
        required={true}
      />

      <Input
        inputValue={zipCode}
        placeholder={"US Zip Code"}
        type={"number"}
        name={"zipCode"}
        required={true}
      />

      <StatesSelectWrapper>
        {selectError && <ErrorMessage>Select State</ErrorMessage>}
        <select
          name="USState"
          onChange={(e: any) => handleChangeState(e.target.value)}
          onBlur={(e) => {
            selectError && setSelectError(true);
          }}
        >
          {USStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </StatesSelectWrapper>

      <BtnWrapper>
        <SubmitBtn text="send" disabled={!!errors.length} />
      </BtnWrapper>
    </FormWrapper>
  );
};

export default Form;
