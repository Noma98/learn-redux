import React from 'react'
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    // state가 store.getState()를 호출했을 때 나오는 결과값과 동일

    /* 최적화 전 */
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    //   }));

    /* 최적화 방법 1 */ //필요한 상황에서만 리렌더링 되도록..
    const { number, diff } = useSelector(state => state.counter);

    /* 최적화 방법 2 */
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }), shallowEqual); 
    //useSelector의 두 번째 파라미터는 equalityFn이다. 이전 값과 다음 값을 비교해 true가 나오면 리렌더링 하지 않고 false가 나오면 리렌더링 한다.
    //shallowEqual은 react-redux에 내장된 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교한다. 

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
