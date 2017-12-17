require('./App.css');
import React from 'react';
import {connect} from 'react-redux';
import {addAsync} from './../../redux/asyncActions';
import {add} from './../../redux/actions';


class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(addAsync())
    }

    render() {
        return (
            <div onClick={this.props.add.bind(null, 1)}>
                Hello world !  {this.props.number.loading ? "load" : this.props.number.value}
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    (state = {}) => {return {number: state.number}},
    (dispatch, props) => Object.assign({}, props, {
        add: (valueChange) => {dispatch(add(valueChange))},
        dispatch
    })
)(App);