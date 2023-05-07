import styles from "./Input.module.css";

export function Input({ className, ...props }) {
  const style = className ? `${styles.input} ${className}}` : styles.input;

  return <input {...props} className={style} />;
}
