import "./BookOptions.css";
import {useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllProducts } from "../../../redux/actions/productActions";
import { currentDate } from "../../../redux/actions/productActions";

import TextField from '@mui/material/TextField'

const BookingOptions = ()=>{
    const dispatch = useDispatch();
    const [seats, setSeats] = useState(1);
    
    const onSeatNumberChange = (e)=>{
        if(e.target.value >7){
            alert("Maximum 7 seats are allowed to book at a time");
            return;
        }
        else {
            setSeats(e.target.value);
        }
    }

    const onBookTicketClick = async()=>{
        dispatch(getAllProducts(currentDate, true, seats));
    }

    return(
        <div id="bookOptions">
            <TextField 
                id="standard-basic" 
                label="From" 
                variant="standard"
            />
            <TextField 
                id="standard-basic" 
                label="To" 
                variant="standard" 
            />
            <TextField 
                id="standard-basic" 
                variant="standard" 
                type="date"  
                style={{marginTop:"15px"}} 
            />
            <TextField 
                id="standard-basic" 
                label="Enter Number of Seats" 
                variant="standard" 
                value={seats} 
                onChange={onSeatNumberChange} 
                type="number"
            />
            <div id="genderOptions"> 
                <input type="radio" name="gender" value="male" id="male"/>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" value="female" id="female"/>                    
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" vlaue="other" id="other"/>
                <label htmlFor="other">Other</label>
            </div>
            <button onClick ={onBookTicketClick}>Book Ticket</button>
            
        </div>

    )
}

export default BookingOptions;
