import { createStore } from 'redux';

/* 리덕스에서 관리할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: []
};

/* 액션 타입 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
//주로 camelCase로 작성
const increase = () => ({
    type: INCREASE
});

const decrease = () => ({
    type: DECREASE
});
const changeText = text => ({
    type: CHANGE_TEXT,
    text
});
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    console.log(store.getState());
};

const unsubscribe = store.subscribe(listener);
//구독 해제하고 싶을 땐 unsubscribe()를 호출하면 된다.

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('냥'));
store.dispatch(addToList({ id: 1, text: '왕' }));
unsubscribe();
//구독 취소해서 아래는 로그 안찍힘
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('냥'));
store.dispatch(addToList({ id: 1, text: '왕' }));