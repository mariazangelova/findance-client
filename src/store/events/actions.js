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
export const postEventSuccess = () => ({
  type: "POST_EVENT_SUCCESS",
});
export const postEvent = (eventData) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`${apiUrl}/events`, { eventData });
    console.log("new event", response);
    dispatch(postEventSuccess());
  };
};
