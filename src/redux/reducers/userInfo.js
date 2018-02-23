import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
    GET_USER
} from "actions/userInfo";


const initState = {
    munberId: null,
    keys: null
};

export default function reducer(state = initState, action) {
    let {type,payload}=action;
    switch (type) {
        case GET_USER:
            return {
                ...payload,
            };
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ""
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ""
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: "请求错误"
            };
        default:
            return state;
    }
}
