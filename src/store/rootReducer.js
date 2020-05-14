import { combineReducers } from "redux";
import events from "./events/reducer";
import event from "./event/reducer";
import styles from "./styles/reducer";

export default combineReducers({ events, event, styles });
