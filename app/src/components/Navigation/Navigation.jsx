import { Link, useLocation } from "react-router-dom";
import { Card } from "../Card/Card";
import style from "./Navigation.module.css";

export function Navigation() {
  const location = useLocation();
  const isCreate = location.pathname === "/booking/create";
  const isList = location.pathname === "/booking/list";

  return (
    <Card className={style.navigation}>
      <Link className={isCreate ? style.current : ""} to="/booking/create">
        Create booking
      </Link>
      <Link className={isList ? style.current : ""} to="/booking/list">
        Bookings
      </Link>
    </Card>
  );
}
