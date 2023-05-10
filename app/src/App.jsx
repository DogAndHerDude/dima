import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { BookingPage } from "./components/layouts/BookingPage/BookingPage";
import { BookingList } from "./components/layouts/BookingList/BookingList";
import { Layout } from "./components/Layout/Layout";
import { Login } from "./components/layouts/Login/Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={
              <Login
                onLogin={() => {
                  console.log("Les go");
                  setLoggedIn(true);
                }}
              />
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/booking/create" />} />
        <Route path="booking" element={<Layout />}>
          <Route path="create" element={<BookingPage />} />
          <Route path="list" element={<BookingList />} />
        </Route>
        <Route path="*" element={<Navigate to="/booking/create" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
