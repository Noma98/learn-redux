import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    // state가 store.getState()를 호출했을 때 나오는 결과값과 동일
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    //useDispatch는 리덕스 스토어의 dispatch를 사용할 수 있게 해주는 hook
    const dispatch = useDispatch();

    //각 액션들을 디스패치하는 함수 만들기
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            //상태와
            number={number}
            diff={diff}
            //액션을 디스패치하는 함수들을 props로 전달
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        ></Counter>
    )
}

export default CounterContainer;
