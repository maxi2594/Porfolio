import { types } from "../types/types";

export const uiReducer = (state={}, action)=>{

    switch (action.type) {

        case types.showMenu:
             return {
                ...state,
                menu:{
                     active: true,
                }
        }
        case types.hideMenu:
             return {
                ...state,
                menu:{
                     active: false,
                }
        }
    
        default:
            return state;
    }
}
