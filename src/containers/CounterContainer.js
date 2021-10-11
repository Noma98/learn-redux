import React from 'react'
import Counter from '../components/Counter'
import { increase, decrease, setDiff } from '../modules/counter'
import { connect } from 'react-redux';

function CounterContainer({ diff, number, onIncrease, onDecrease, onSetDiff }) {
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
const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
});
const mapDispatchToProps = dispatch => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
    onSetDiff: (diff) => dispatch(setDiff(diff))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
