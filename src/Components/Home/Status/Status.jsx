import "./Status.css";
import ChairIcon from '@mui/icons-material/Chair';

import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {getProductDetails} from "../../../redux/actions/productActions";
import { getAllProducts } from "../../../redux/actions/productActions";
import { currentDate } from "../../../redux/actions/productActions";

const Status = ()=>{
    const {products} = useSelector(state=>state.getProducts);
    console.log(products);


    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(getProductDetails(currentDate));

    // },[])

    return (
        <div id="status">
            <div className="statusRow available"> 
                <ChairIcon className="available"/>
                <span className="seatType">Available Seats</span>
                {/* <span className="seatQty">{avalableSeats}</span> */}
                <span className="seatQty">{products?.avalableSeats}</span>
            </div>
            <div className="statusRow booked"> 
                <ChairIcon/>
                <span className="seatType">Booked Seats</span>
                {/* <span className="seatQty">{bookedSeats}</span> */}
                 <span className="seatQty">{products?.bookedSeats}</span>
            </div>
            <div className="statusRow ladies" > 
                <ChairIcon/>
                <span className="seatType">Booked by Lady</span>
                {/* <span className="seatQty">{ladies}</span> */}
                <span className="seatQty">{products?.ladies}</span>
            </div>
            <div className="statusRow gents"> 
                <ChairIcon/>
                <span className="seatType">Books by gents</span>
                {/* <span className="seatQty">{gents}</span> */}
                <span className="seatQty">{products?.gents}</span>
            </div>
            <div className="statusRow other"> 
                <ChairIcon/>
                <span className="seatType">Books by other</span>
                {/* <span className="seatQty">{other}</span> */}
                <span className="seatQty">{products?.other}</span>
            </div>
    
        </div>

    )
}

export default Status;

