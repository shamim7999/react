import React from "react";
import TodoList from "./components/TodoList";


const List = () => {
    let items = TodoList.map((item) => {    
        console.log(item.id);
        return (
            <div key={item.id}>
                <div className='card'>
                    <p>{item.id}</p>
                    <div className="card-title">
                        {item.title}   
                    </div>
                    <div className="card-desc">
                        { item.desc}
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
           <h1 className="headingStyle">TODO List</h1>
           {items}
        </div>
    );
};

export default List;
