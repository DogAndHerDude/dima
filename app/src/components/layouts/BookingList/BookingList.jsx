import { useEffect, useState } from "react";
import { listBookings } from "../../../api-calls";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { BookingPage } from "../BookingPage/BookingPage";
import styles from "./BookingList.module.css";

export function BookingList() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  async function getBookings() {
    try {
      setLoading(true);

      const data = await listBookings();

      setBookings(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingEdit}>
        {selectedBooking && (
          <form>
            <div className={styles.name}>
              <Input
                name="firstName"
                value={selectedBooking.firstName}
                disabled
              />
              <Input
                name="lastName"
                value={selectedBooking.lastName}
                disabled
              />
            </div>

            <Input name="email" value={selectedBooking.email} disabled />
            <Input name="date" defaultValue={selectedBooking.date} />

            <Button>{!submitting ? "Update booking" : "Updating..."} </Button>
          </form>
        )}
      </div>

      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} onClick={() => setSelectedBooking(booking)}>
            <p>
              {booking.firstName} {booking.lastName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
