import React from 'react'
import Counter from '../components/Counter'
import { increase, decrease, setDiff } from '../modules/counter'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function CounterContainer({ diff, number, increase, decrease, setDiff }) {
    return <Counter
        //상태 넣어주기
        diff={diff}
        number={number}
        //액션을 디스패치해 주는 함수 넣어주기
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}
    />
}
const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increase,
            decrease,
            setDiff
        },
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
