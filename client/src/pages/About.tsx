import { FC } from "react";
import Typography from "../components/Typography";
import { loremPlug } from "../utils/data/loremPlug";

const About: FC = () => {
  return (
    <div>
      <Typography tag="h1" text="About us page" />
      <Typography tag="p" text={loremPlug} />
    </div>
  );
};

export default About;
