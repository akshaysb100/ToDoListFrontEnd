import React from 'react';
import axios from 'axios'
import './ToDoLists.css'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        localStorage.setItem(0, this.state.value)
    }

    handleSubmit(event) {
        console.log(localStorage.getItem(0))
        let item = localStorage.getItem(0);
        axios({
            method: 'post',
            url: 'http://localhost:8080/list/addTask',
            headers: {},
            data: {
                "task": "hhsdhsahdsahdhasd"
            }
        });

    }

    render() {
        return (
            <div>
                <div className="size">
                    <input type="checkbox" />
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div>
                    {this.handleSubmit()}
                </div>
            </div>
        );
    }
}

export default List;