import { FC, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcEngineering } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";
import {
  BtnWrapper,
  MobileNav,
  Navbar,
  NavLogo,
} from "../styles/components/NavBar.styles";
import { INavBarProps, ISize, Routers } from "../types";
import { useResize } from "../hooks/useResize";
import { baseTheme } from "../styles/theme";

const HeaderNavBar: FC<INavBarProps> = ({ routersData }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { width }: ISize = useResize();
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Navbar>
      <NavLink to={Routers.INDEX}>
        <NavLogo>
          <FcEngineering />
        </NavLogo>
      </NavLink>

      {width && baseTheme.media.sm < width ? (
        <ul>
          {routersData.map(({ path, description }, idx) => (
            <li key={idx}>
              <NavLink to={path}>{description}</NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <MobileNav show={showMenu} ref={ref}>
          <BtnWrapper>
            <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} />
          </BtnWrapper>

          <ul>
            {routersData.map(({ path, description }, idx) => (
              <li key={idx}>
                <NavLink to={path} onClick={() => setShowMenu(!showMenu)}>
                  {description}
                </NavLink>
              </li>
            ))}
          </ul>
        </MobileNav>
      )}
    </Navbar>
  );
};

export default HeaderNavBar;
