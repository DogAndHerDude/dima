import { Outlet } from "react-router";
import { Navigation } from "../Navigation/Navigation";
import style from "./Layout.module.css";

export function Layout() {
  return (
    <div className={style.layout}>
      <Navigation />
      <Outlet />
    </div>
  );
}
