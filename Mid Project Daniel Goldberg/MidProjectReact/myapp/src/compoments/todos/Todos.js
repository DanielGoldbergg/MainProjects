import React, { Component } from 'react'
import ToDosCardComp from './todosCard'

class toDosComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: this.props.user.todos,
            newObj: '',
            isDivShown: true
        }


    }

    componentDidMount = () => {
        console.log(this.state.todos)


    }

    createToDo = (e) => {
        let todo = {
            id: this.state.todos.length + 1,
            Completed: false,
            title: e.target.value
        }
        this.setState({ newObj: todo })


    }



    render() {
        let todos = this.state.todos.map(todo => {
            return <ToDosCardComp key={todo.id} todos={todo} updateTodos={(todoData) => this.setState({ todoד: todoData })} />
        })
        return (
            <div style={{ border: '2px solid blue' }}>
                <h5>title:</h5>
                <div>
                    <input type="button" value='Add' onClick={() => { this.setState({ isDivShown: false }) }} /><br />
                    <input type='text' onChange={this.createToDo} />
                    <input type='button' value='Add' onClick={() => { let newArray = [...this.state.todos, this.state.newObj]; this.setState({ todos: newArray, isDivShown: true }) }} />
                    <input type='button' value='Cancle' onClick={() => { this.setState({ isDivShown: true }) }} />
                </div>
                {todos}
            </div>
        )
    }
}

export default toDosComp