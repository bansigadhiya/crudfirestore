import { CREATE_STU, DELETE_STU, GET_INFO, LOADING, UPDATE_STU, VIEW_STU } from "../Constants/Action.type";
import { db } from '../../Firebase';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { collection, addDoc,getDocs } from "firebase/firestore";

export const CreateStuAction = (data) => {

    return {
        type: CREATE_STU,
        payload: data
    }
}

export const ViewStuAction = (data) => {

    return {
        type: VIEW_STU,
        payload: data
    }
}

export const loading = () => {

    return {
        type: LOADING
    }
}

export const CreateStuAsync = (data) => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(CreateStuAction(data));
        }, 3000);
    };
}

export const DeleteStuAction = (id) => {

    return {
        type: DELETE_STU,
        payload: id
    }
}

export const GetInfoAction = (id) => {

    return {
        type: GET_INFO,
        payload: id
    }
}

export const UpdateStuAction = () => {

    return {
        type: UPDATE_STU,
    }
}

export const CreateStuFirestore = (data) => {

    return async dispatch => {
        await setDoc(doc(db, "students", `${data.id}`), data).then(() => {
            dispatch(CreateStuAction(data))
            console.log("done");
        }).catch((err) => {
            console.log(err, "err");
        })

        // await addDoc(collection(db, "students"), data).then(() => {
        //     dispatch(CreateStuAction(data))
        // }).catch((err) => {
        //     console.log(err,"err");
        // })
    }
}

export const GetStuFirestore = () => {

    return async dispatch => {
        await getDocs(collection(db,"students")).then((res) => {
            let newstu = [];
            res.forEach((doc) => {
                newstu = [...newstu,(doc.data())]
            })
            dispatch(ViewStuAction(newstu))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const GetStuInfoFirestore = (id) => {

    return async dispatch => {
        await getDoc(doc(db,"students",`${id}`)).then((res) => {
            dispatch(GetInfoAction(res.data()))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const UpdateStuFirestore = (data) => {

    return async dispatch => {
        await updateDoc(doc(db,"students",`${data.id}`),data).then(() => {
            // console.log("update success");
            dispatch(UpdateStuAction());
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}

export const DeleteStuFirestore = (id) => {

    return async dispatch => {
        await deleteDoc(doc(db,"students",`${id}`)).then(() => {
            dispatch(GetStuFirestore())
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}