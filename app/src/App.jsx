import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { BookingPage } from "./components/layouts/BookingPage/BookingPage";
import { BookingList } from "./components/layouts/BookingList/BookingList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/create-booking" />} />
        <Route path="create-booking" element={<BookingPage />} />
        <Route path="booking-list" element={<BookingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
