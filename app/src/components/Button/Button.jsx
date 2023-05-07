import styles from "./Button.module.css";

export function Button({ children, className, ...props }) {
  const style = className ? `${styles.button} ${className}` : styles.button;

  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}
