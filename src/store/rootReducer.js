import { combineReducers } from "redux";
import events from "./events/reducer";
import event from "./event/reducer";
import styles from "./styles/reducer";
import user from "./user/reducer";

export default combineReducers({ user, events, event, styles });
