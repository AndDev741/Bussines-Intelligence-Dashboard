import { combineReducers } from "redux";
import authenticationSlice from './authentication/authenticationSlice';

const rootReducer = combineReducers({
    authentication: authenticationSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;