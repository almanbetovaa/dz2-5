
import {combineReducers} from "redux";
import mainPageReducer from "./mainPageReducer";
import usersPageReducer from "./usersPageReducer";

export const rootReducer = combineReducers({
    mainPageReducer,
    usersPageReducer
})