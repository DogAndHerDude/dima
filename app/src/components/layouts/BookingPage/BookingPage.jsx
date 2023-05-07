import { useRef, useState } from "react";
import { createBooking } from "../../../api-calls";
import { Input } from "../../Input/Input";
import styles from "./BookingPage.module.css";

function formDataToObject(data) {
  const obj = {};

  for (const entry of data.entries()) {
    obj[entry[0]] = entry[1];
  }

  return obj;
}

export function BookingPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function submitHandler(event) {
    try {
      setLoading(true);
      event.preventDefault();

      const data = new FormData(event.nativeEvent.target);

      await createBooking(formDataToObject(data));
      formRef.current?.reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={submitHandler}>
      <div className={styles.name}>
        <Input
          className={styles.input}
          name="firstName"
          type="text"
          required
          placeholder="First name"
          disabled={loading}
        />
        <Input
          className={styles.input}
          name="lastName"
          type="text"
          required
          placeholder="Last name"
          disabled={loading}
        />
      </div>

      <Input
        className={styles.input}
        name="email"
        type="email"
        required
        placeholder="Email"
        disabled={loading}
      />
      <Input
        className={styles.input}
        name="date"
        type="datetime-local"
        required
        placeholder="Booking date"
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Book"}
      </button>
    </form>
  );
}
