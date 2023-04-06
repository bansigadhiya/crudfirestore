import { combineReducers } from "redux";
import CreateStuReducer from "./CreateStu.reducer";
import AuthReducer from "./Auth.reducer";

const Rootreducer = combineReducers({
    CreateStuReducer,AuthReducer
})

export default Rootreducer;