import axios from "axios";

export async function createBooking(data) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/booking/booking`,
      data
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
