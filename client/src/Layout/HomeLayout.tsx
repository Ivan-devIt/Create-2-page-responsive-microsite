import { FC } from "react";
import { Outlet } from "react-router-dom";
import FooterNavBar from "../components/FooterNavBar";
import HeaderNavBar from "../components/HeaderNavBar";
import { routersData } from "../utils/data/routersData";
import { Container } from "../styles/components/Container.styles";

const HomeLayout: FC = () => {
  return (
    <div>
      <HeaderNavBar routersData={routersData} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <FooterNavBar routersData={routersData} />
    </div>
  );
};

export default HomeLayout;
