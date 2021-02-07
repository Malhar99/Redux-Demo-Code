import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnresolvedBugs, loadBugs,resolveBug } from "../store/bugs";

class Bugs extends Component {
    componentDidMount(){
        this.props.loadBugs();
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.bugs.map((bugs) => {
                       return <li key={bugs.id}>{bugs.description}
                       <button onClick={()=> this.props.resolveBug(bugs.id)}>Resolve</button></li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  //bugs: state.entities.bugs.list
  bugs: getUnresolvedBugs(state)
})

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs()),
    resolveBug:id => dispatch(resolveBug(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(Bugs);