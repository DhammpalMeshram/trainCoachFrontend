import "./Coach.css";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../../../redux/actions/productActions";
import { currentDate } from "../../../redux/actions/productActions";

import ChairIcon from '@mui/icons-material/Chair';

const Coach = ()=>{
        const {loading, products} = useSelector(state=>state.getProducts);
        const dispatch = useDispatch();
        // console.log(products);

        useEffect(()=>{
                dispatch(getAllProducts(currentDate, false,0));
        },[])

    return(
        <div id="coach">
                {
                 loading?
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" width="200px"/>: null
                }
                {
                 !loading && products.data.map((item, index)=>{
                        return(
                                <div id="row" key={index}>{
                                  item.map((chair)=>{
                                    return(
                                      <div className={`${chair.seatType} seatDiv`} key={chair.id}  >                                        <ChairIcon 
                                          className={chair.seatType}
                                          rownumber = {chair.rowNumber}
                                          id={chair.id}
                                        /> {chair.id}
                                        </div>

                                    )
                                  })
                                }
                                </div>
                              )}
                        )
                }
        </div>
    )
}

export default Coach;


//     <div id="row">
//             <ChairIcon className="booked"/>
//             <ChairIcon className = "available"/>
//             <ChairIcon/>
//             <ChairIcon className="hidden"/>
//             <ChairIcon className = "available"/>
//             <ChairIcon className = "available"/>
//             <ChairIcon className = "available"/>
//             <ChairIcon className = "available"/>
//     </div>
//     <div id="row">
//             <ChairIcon className="booked"/>
//             <ChairIcon className = "available"/>
//             <ChairIcon/>
//     </div>
                