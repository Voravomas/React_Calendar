import React from "react";

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }

        this.todoRef = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.task);

        this.setState({ task: '' });
        // this.todoRef.current.focus();
    }

    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input placeHolder="Add task" value={this.state.task} onChange={(e) => this.handleChange(e)}></input>
                <input type="submit" value="+"></input>
            </form>
        )
    }
}