import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FooterWrapper } from "../styles/components/FooterNavBar.styles";
import { INavBarProps } from "../types";

const FooterNavBar: FC<INavBarProps> = ({ routersData }) => {
  return (
    <FooterWrapper>
      <nav>
        <ul>
          {routersData.map(({ path, description }, idx) => (
            <li key={idx}>
              <NavLink to={path}>{description}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </FooterWrapper>
  );
};

export default FooterNavBar;
