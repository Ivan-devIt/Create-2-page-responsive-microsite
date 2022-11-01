import { FC } from "react";
import Typography from "../components/Typography";
import { loremPlug } from "../utils/data/loremPlug";

const Contacts: FC = () => {
  return (
    <div>
      <Typography tag="h1" text="Contact page" />
      <Typography tag="p" text={loremPlug} />
    </div>
  );
};

export default Contacts;
