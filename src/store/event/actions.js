import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchEventSuccess = (eventDetails) => ({
  type: "FETCH_EVENT_SUCCESS",
  payload: eventDetails,
});
export const fetchEvent = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    console.log("event", response.data);
    dispatch(fetchEventSuccess(response.data));
  };
};
