import { CREATE_STU, DELETE_STU, GET_INFO, LOADING, UPDATE_STU, VIEW_STU } from "../Constants/Action.type";

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: true,
    isEdit: false
}

const CreateStuReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_STU:
            return {
                ...state,
                studentList: [
                    ...state.studentList,
                    action.payload
                ],
                isLoading: false,
                isEdit: false

            }
            break;
        case VIEW_STU:
            return {
                ...state,
                studentList: action.payload,
                isLoading: false,
                studentInfo: {},
                isEdit: false

            }
            break;
        case LOADING:
            return {
                ...state,
                isLoading: true,
                isEdit: false

            }
            break;
        case DELETE_STU:
            const dStu = state.studentList.filter((stu) => stu.id !== action.payload);
            return {
                ...state,
                studentList: dStu,
                isEdit: false

            }
            break;
        case GET_INFO:
            // const getInfo = state.studentList.filter((stu) => stu.id == action.payload);
            return {
                ...state,
                studentInfo: action.payload,
                isEdit: true
            }
            break;
        case UPDATE_STU:
            return {
                ...state,
                isEdit : false,
                studentInfo : {}
            }
            break;
        default:
            return state;
    }

}

export default CreateStuReducer;