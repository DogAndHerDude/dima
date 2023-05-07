import express from "express";
import {
  createBooking,
  deleteBooking,
  listBookings,
  updateBooking,
} from "../../controllers/booking/index.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/list", listBookings);
router.patch("/:id", updateBooking);
router.delete("/:id", deleteBooking);

export default router;
