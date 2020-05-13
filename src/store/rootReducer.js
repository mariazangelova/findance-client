import { combineReducers } from "redux";
import events from "./events/reducer";
import event from "./event/reducer";

export default combineReducers({ events, event });
