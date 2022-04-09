import React from "react";
import { add_data, reduce_data } from "../redux/Action";

import { useDispatch, useSelector } from "react-redux"

export const Counter = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()




    return (
        <div>
            <h1>COUNTER : {counter}</h1>
            <button onClick={() => dispatch(add_data(8))}>INCREMENT</button>
            <button onClick={() => dispatch(reduce_data(5))}>DECREMENT</button>
        </div>
    );
};