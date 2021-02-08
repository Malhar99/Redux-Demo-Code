import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  loadBugs , addBug ,getUnresolvedBugs ,resolveBug ,getResolvedBugs} from "../store/bugs";

class Bugs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleOnChange = (event) =>{
        this.setState({description: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.description);
        this.props.addBug(this.state.description);
    }
    componentDidMount(){
        this.props.loadBugs();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text"  onChange={this.handleOnChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <h3>List of All Bugs</h3>
                <ul>
                    {this.props.bugs.map((bugs) => {
                       return <li key={bugs.id}>{bugs.description}
                       {/* <button onClick={()=> this.props.resolveBug(bugs.id)}>Resolve</button>*/}</li> 
                    })}
                </ul>
                <h3>List of Unresolved Bugs</h3>
                <ul>
                    {this.props.unresolvedbugs.map((bugs) => {
                       return <li key={bugs.id}>{bugs.description} 
                       <button onClick={()=> this.props.resolveBug(bugs.id)}>Resolve</button></li> 
                    })}
                </ul>
                <h3>List of Resolved Bugs</h3>
                <ul>
                    {this.props.resolvedbugs.map((bugs) => {
                       return <li key={bugs.id}>{bugs.description} 
                    </li> 
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  bugs: state.entities.bugs.list,
  unresolvedbugs: getUnresolvedBugs(state),
  resolvedbugs: getResolvedBugs(state)
})

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs()),
    addBug:description => dispatch(addBug({ description : description})),
    resolveBug:id => dispatch(resolveBug(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(Bugs);