import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchStylesSuccess = (styles) => ({
  type: "FETCH_STYLES_SUCCESS",
  payload: styles,
});
export const fetchStyles = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/styles`);
    dispatch(fetchStylesSuccess(response.data));
  };
};
