import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const BookingModel = mongoose.model("booking", BookingSchema);

export default BookingModel;
