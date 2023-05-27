import axois from "axios";
import * as actionTypes from "../constants/productConstants";

const url = "http://localhost:8000";

// function to get current date
function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}
export const currentDate = getCurrentDate();



// middleware api for getting all seats data
export const getAllProducts =(selectedDate, booking, selectedSeats)=> async(dispatch)=>{
    // console.log(selectedDate);
    try{
        if(booking){
            const {data} = await axois.post(`${url}/booktickets`,{date:selectedDate,numberOfSeats:selectedSeats});
        // console.log(data);

            dispatch({
                type:actionTypes.GET_PRODUCTS_SUCCESS,
                payload:data
            })
        }
        else{
            const {data} = await axois.post(`${url}/getalldata`,{date:selectedDate});
            // console.log(data);

            dispatch({
                type:actionTypes.GET_PRODUCTS_SUCCESS,
                payload:data
            })
        }
    }
    catch(err){
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:err.message
        })
    }
}





// // middleware api for getting all booking data
// export const getProductDetails =(selectedDate)=> async(dispatch)=>{
//     try{
//         const {data} = await axois.post(`${url}/getseatnumbers`,{date:selectedDate});
//         // console.log(data);
        
//         dispatch({
//             type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
//             payload:data
//         })
//     }
//     catch(err){
//         dispatch({
//             type:actionTypes.GET_PRODUCT_DETAIL_FAIL,
//             payload:err.message
//         })

//     }
    
// }