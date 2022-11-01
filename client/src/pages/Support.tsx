import { FC } from "react";
import Typography from "../components/Typography";
import { loremPlug } from "../utils/data/loremPlug";

const Support: FC = () => {
  return (
    <div>
      <Typography tag="h1" text="Support page" />
      <Typography tag="p" text={loremPlug} />
    </div>
  );
};

export default Support;
