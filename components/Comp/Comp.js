import React from 'react';
import {connect} from 'react-redux';
import {add} from './../../redux/actions';
import {addAsync} from './../../redux/asyncActions';


class Comp extends React.Component {
    componentDidMount() {
        this.props.dispatch(addAsync())
    }

    render() {
        return (
            <div onClick={(e) => {e.stopPropagation(); this.props.add(-1)}}>Hello comp !
                {this.props.number.loading ? "load" : this.props.number.value}</div>
        )
    }
}

export default connect(
    (state = {}) => {return {number: state.number}},
    (dispatch, props) => Object.assign({}, props, {
        add: (valueChange) => {dispatch(add(valueChange))},
        dispatch
    })
)(Comp);