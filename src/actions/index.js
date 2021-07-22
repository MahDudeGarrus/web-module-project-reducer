export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_PLUS = "M_PLUS";
export const M_R = "M_R";
export const M_CLEAR = "M_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (sign) => {
    return({type:CHANGE_OPERATION, payload:sign});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const mPlus = (memory) => {
    return({type:M_PLUS, payload:memory});
}

export const mR = (memory) => {
    return({type:M_R, payload:memory});
}

export const mClear = () => {
    return({type:M_CLEAR})
}