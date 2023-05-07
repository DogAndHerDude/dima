import express from "express";
import {
  createBooking,
  deleteBooking,
  listBookings,
  updateBooking,
} from "../../controllers/booking/index.js";

const router = express.Router();

router.post("/booking", createBooking);
router.get("/bookings", listBookings);
router.patch("/booking/:id,", updateBooking);
router.delete("/booking/:id", deleteBooking);

export default router;
