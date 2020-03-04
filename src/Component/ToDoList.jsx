import React from 'react';
import List from "./List";

class ToDoList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task: []
        }

        this.add = this.add.bind(this);
    }
    add(e) {
        const task = this.state.task.concat(List);
        this.setState({ task });
        console.log("to do list")
    }

    render() {
        const task = this.state.task.map((Element, index) => {
            return <Element key={ index } index={ index } />
        });
        return (
            <div>
                <div className="inputs">
                    { task}
                </div>
                <button className="button" onClick={this.add}>+</button>
            </div>
        );
    }
}

export default ToDoList;
