import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchEventsSuccess = (events) => ({
  type: "FETCH_EVENTS_SUCCESS",
  payload: events,
});
export const fetchEvents = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/events`);
    console.log("events", response.data);
    dispatch(fetchEventsSuccess(response.data));
  };
};
