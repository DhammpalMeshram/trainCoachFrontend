import * as actionTypes from "../constants/productConstants";

const intialState = {loading:true, product:[]}


// reducer for getProduct Api
export const getAllProductsReducer =(state = intialState, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS :
            return {loading:false, products:action.payload}

        case actionTypes.GET_PRODUCTS_FAIL:
            // return {loading: false, error: action.payload};
            return {loading: false, product:[], error:action.payload};

        default : return state;
    }
}



// let InitialBookedState = {
//     details:{
//         avalableSeats:0,
//         bookedSeats:0,
//         gents:0,
//         ladies:0,
//         other:0
//     }
// }

// export const getProductDetailReducer =(state =InitialBookedState, action)=>{
//     switch(action.type){
//         case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
//             return {details:action.payload}

//         case actionTypes.GET_PRODUCT_DETAIL_FAIL:
//             // return {error:action.payload}
//             return {...InitialBookedState, error:action.payload}

//         case actionTypes.GET_PRODUCT_DETAIL_RESET:
//             return InitialBookedState;

//         default : return state;
//     }
// }

