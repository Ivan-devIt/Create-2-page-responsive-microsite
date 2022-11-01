import React, { FC } from "react";
import { TypographyWrapper } from "../styles/components/TypographyWrapper.styles";
import { TypographyType } from "../types";

const Typography: FC<TypographyType> = ({ text, tag }) => {
  const Tag = tag || "p";

  return (
    <TypographyWrapper>
      <Tag>{text}</Tag>
    </TypographyWrapper>
  );
};

export default Typography;
