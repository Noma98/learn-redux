import React, { memo, useState } from 'react'
const TodoItem = memo(({ todo, onToggle }) =>
    <li
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
    </li>
);
const TodoList = memo(({ todos, onToggle }) =>
    <ul>
        {todos.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
        />)}
    </ul>
);

function Todos({ todos, onToggle, onCreate }) {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
        onCreate(text);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    onChange={onChange}
                    placeholder="할 일을 입력하세요."
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

export default Todos
