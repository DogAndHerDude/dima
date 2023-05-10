import { useState } from "react";
import { Button } from "../../Button/Button";
import { Card } from "../../Card/Card";
import { Input } from "../../Input/Input";
import style from "./Login.module.css";

const validEmail = "test@email.com";
const validPassword = "password";

export function Login({ onLogin }) {
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    const data = new FormData(event.nativeEvent.target);

    if (data.get("email") !== validEmail) {
      setError(true);
      return;
    }

    if (data.get("password") !== validPassword) {
      setError(true);
      return;
    }

    onLogin();
  };

  return (
    <div>
      <h1>Log in</h1>

      {error && (
        <div className={style.error}>
          <p>Email or password is not correct</p>
        </div>
      )}

      <Card className={style.wrapper}>
        <form className={style.login} onSubmit={submitHandler}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            onFocus={() => setError(false)}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            onFocus={() => setError(false)}
          />
          <Button type="submit">Log in</Button>
        </form>
      </Card>
    </div>
  );
}
