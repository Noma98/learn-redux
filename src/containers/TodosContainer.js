import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    //useSelector에서 꼭 객체를 반환할 필요는 X
    //한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 리턴하면 됨
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); //최적화 위해 useCallback 사용

    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    )
}

export default TodosContainer
