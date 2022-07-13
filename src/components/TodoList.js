import React from "react";
const [todo, setTodo] = useState([]);
const [value, setValue] = useState([]);
const [input, setInput] = useState();
const [bChecked, setChecked] = useState(false);
const [checkedItems, setCheckedItems] = useState(new Set());
function TodoList() {

    return (
        <>
            <div> {value}</div>< div className="todos" key={index}>{todo}
                <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} /></div>
        </>
    );
};
export default TodoList;
