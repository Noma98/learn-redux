
/* 액션 타입 선언 */
const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; //todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/* 초기 상태 선언 */
// 리듀서 초기 상태는 꼭 객체타입일 필요가 없다.
// 배열, 객체, 원시 타입(숫자, 문자열, 불리언..) 다 상관 X
const initialState = [
    /* 예시..
    {
        id:1,
        text:'예시',
        done:false
    } 
     */
]
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
}