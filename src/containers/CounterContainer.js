import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease, setDiff } from '../modules/counter'

function CounterContainer() {
    // useSelector:리덕스 스토어의 상태를 조회하는 훅
    const { number, diff } = useSelector(state => state.counter)
    // useDispatch:리덕스 스토어의 dispatch를 사용할 수 있도록 하는 훅
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return <Counter
        //상태 넣어주기
        diff={diff}
        number={number}
        //액션을 디스패치해 주는 함수 넣어주기
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
}

export default CounterContainer
