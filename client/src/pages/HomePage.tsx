import { FC } from "react";
import Form from "../components/Form";
import Typography from "../components/Typography";
import { Section } from "../styles/components/Section.styles";

const HomePage: FC = () => {
  return (
    <Section>
      <Typography tag="h1" text="Welcome to the service " />
      <Form />
    </Section>
  );
};

export default HomePage;
