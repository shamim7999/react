import React from "react";
import { v4 as uuidv4 } from 'uuid';

let dummyTodos = [

    {
        id: uuidv4(),
        title: "Todo1 title 1",
        desc: "Todo1 Desc"

    },
    
    {
        id: uuidv4(),
        title: "Todo2 title 2",
        desc: "Todo2 Desc"

    }
]

export default dummyTodos;