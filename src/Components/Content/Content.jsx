import React, {useState} from "react";
import "./Content.scss";
import TodoItem from "../Todo-Item/TodoItem";


const Content = () => {
    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const monthName = date.toLocaleString(undefined, { month: "long" });
    console.log(date);

    const [content, setContent] = useState([]);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default behavior (line break)
          // Insert your custom behavior here
          // For example, you can add a new custom component instead of a div
          console.log("Clicked Enter")
          setContent([...content, <TodoItem key={content.length} type="Task" content="This is a ENter contenet"/>]);
        }
    };

    return (
        <div className="div-content-main">
            <div className="div-content-day">
                <h2>{date.toLocaleString("default", options)}</h2>
                <div 
                    contentEditable="true" 
                    onKeyDown={handleKeyDown}
                    >
                    <TodoItem type="Task" content="This is a Task"/>
                    <TodoItem type="Note" content="This is a Note"/>
                    <TodoItem type="Task" content="This is a Meeting"/>
                    <TodoItem type="Task" content="This is Imp"/>
                    {content.map((component, index) => (
                        <React.Fragment key={index}>{component}</React.Fragment>
                    ))}
                </div>
            </div>
        
        </div>
        
    );
};

export default Content;
