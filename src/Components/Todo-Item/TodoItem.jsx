import React from "react";
import PropTypes from "prop-types";
import './TodoItem.scss'

const TodoItem = (props) => {
    const getTodoPrefix = (type, content) => {
        switch (type) {
            case "Task":
                return <><input type="checkbox" className="Tasks"/><span>{content}</span></>;

            case "Note":
              return <ul className="note"><li>{content}</li></ul>

            default:
              return <span>{content}</span>
        }
    };
    return (
        <>
            <div>
                
                {
                  getTodoPrefix(props.type, props.content)
                }
                
            </div>
        </>
    );
};

TodoItem.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string,
};

export default TodoItem;
