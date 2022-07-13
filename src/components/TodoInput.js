import React, { useState } from "react";
import TodoList from './TodoList';

function TodoInput() {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState([]);
    const [input, setInput] = useState();
    const [bChecked, setChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Set());
    const [] = useState();


    const checked = (e) => {
        
    }

    const checkHandler = ({ target }) => {
        setChecked(!bChecked);
        checkedItemHandler(target.checked);
    };


    const checkedItemHandler = (isChecked) => {
        if (isChecked) {
            setCheckedItems(checkedItems);
            value = '완료';
        } else if (!isChecked) {
            setCheckedItems(checkedItems);
            value = '미완료';
        }
    };


    const inputChange = (e) => {
        setInput(e.target.value);
    };


    const buttonOnClick = (e) => {
        setTodo((prevState) => {
            return [input, ...prevState];
        })
    };


    return (
        <>
            <input className="text" type="text" value={input} onChange={inputChange} />
            <button className="btn1" onClick={buttonOnClick}>추가하기</button>
            {todo.map((todo, index) => {
                return (
                    <TodoList/>
                )
            })}
        </>
    )
}
export default TodoInput;