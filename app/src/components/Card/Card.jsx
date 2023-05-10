import style from "./Card.module.css";

export function Card({ className, children, ...props }) {
  return (
    <div className={`${style.card} ${className ? className : ""}`}>
      {children}
    </div>
  );
}
