import React, { Component } from 'react'

class ToDosCardComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: this.props.todos,
            divcolor: '',
            newObj: '',
            isDivShown: true
        }
    }

    changeToTrue = () => {
        this.setState({ todo: { ...this.state.todo, completed: true } })
        this.props.updateTodos(this.state.todo)
    }


    render() {

        return (
            <div style={{ border: 'solid 1px blue', margin: '2px' }}>


                {(this.state.isDivShown) ? <div style={{ border: 'solid 1px blue', margin: '2px' }}>
                    Title:{this.state.todo.title}
                    <br />
                    Completed:{this.state.todo.completed ? 'true' : 'false'}
                    {!(this.state.todo.completed) && <input type="button" value="Mark Completed" onClick={this.changeToTrue} />}
                </div> : (<div style={{ border: 'solid 1px blue', margin: '2px' }}>
                </div>)}
            </div>
        )
    }
}
export default ToDosCardComp