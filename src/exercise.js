import { createStore } from 'redux';

//리덕스에서 관리할 초기 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

//액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수 정의
const increase = () => ({
    type: INCREASE
});
const decrease = () => ({
    type: DECREASE
});
const changeText = text => ({
    type: CHANGE_TEXT,
    text
})
const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 만들기
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, action.item]
            };
        default:
            return state;
    }
}
// 스토어 만들기
const store = createStore(reducer);

console.log(store.getState());

// 스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
// 구독 해제하고 싶으면 unsubscribe()를 호출하면 됨

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(addToList({ id: 1, text: '와우' }));
store.dispatch(changeText('안녕하세요'));