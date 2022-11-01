import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import HomePage from "../pages/HomePage";
import Support from "../pages/Support";
import ThankYouPage from "../pages/ThankYouPage";
import { Routers } from "../types";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={Routers.INDEX} element={<HomeLayout />}>
        <Route
          path={Routers.INDEX}
          element={<Navigate to={Routers.HOME} replace />}
        ></Route>
        <Route path={Routers.HOME} element={<HomePage />}></Route>
        <Route path={Routers.CONTACTS} element={<Contacts />}></Route>
        <Route path={Routers.ABOUT} element={<About />}></Route>
        <Route path={Routers.SUPPORT} element={<Support />}></Route>
        <Route path={Routers.THANKS} element={<ThankYouPage />} />
      </Route>
      <Route
        path={Routers.DEFAULT}
        element={<Navigate to={Routers.INDEX} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
