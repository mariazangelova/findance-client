import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUserId } from "../user/selectors";

export const fetchEventSuccess = (eventDetails) => ({
  type: "FETCH_EVENT_SUCCESS",
  payload: eventDetails,
});
export const fetchEvent = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    dispatch(fetchEventSuccess(response.data));
  };
};

export const newDancer = (newDancer) => ({
  type: "NEW_DANCER",
  payload: newDancer,
});
export const postDancer = (eventId) => {
  return async (dispatch, getState) => {
    const userId = selectUserId(getState());
    console.log("DATA", eventId, userId);
    const response = await axios.post(`${apiUrl}/dancers/${eventId}`, {
      userId,
    });
    console.log("response", response);
    //dispatch(newDancer(response.data));
  };
};
