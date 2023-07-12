import React, { Component } from 'react'
import MoreInfoComp from './OtherData'
import ToDosComp from '../todos/Todos'
import PostComp from '../posts/Posts'

class UserCardComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { ...this.props.user },
            isOtherDataVisible: false,
            isTodoVisible: false,
            isPostVisible: false,
            isUserDataVisible: false,
            divcolor: '',
            address: {
                street: this.props.user.address.street,
                city: this.props.user.address.city,
                zipcode: this.props.user.address.zipcode
            }
        }


    }

    useDelete = () => {
        this.props.sendDelete(
            this.state.user.id
        )
    }

    UpdateUser = () => {
        this.props.UpdateUser({
            ...this.state.user,
            address: this.state.address
        })
    }






    render() {
        let falsecheck;
        let divStyle;
        if (this.state.user.todos) {
            falsecheck = this.state.user.todos.some((todo) => { return todo.completed == false })
            if (falsecheck == true) {
                divStyle = '2px solid red'
            }
            else {
                divStyle = '2px solid green'
            }
        }

        let divcolor = ''
        if (this.state.isUserDataVisible) { divcolor = '#f9de8e' }



        return (
            <div style={{ border: divStyle, backgroundColor: divcolor }}>
                <h3>UserCard</h3>


                <label onClick={() => this.setState({ isUserDataVisible: !this.state.isUserDataVisible })}  >id : {this.state.user.id}</label>
                {this.state.isUserDataVisible && <ToDosComp user={this.state.user} />}
                {this.state.isUserDataVisible && <PostComp user={this.state.user} />}

                <br />
                Name:<input type="text" value={this.state.user.name} onChange={e => this.setState({ user: { ...this.state.user, name: e.target.value } })} />
                <br />
                Email:<input type="text" value={this.state.user.email} onChange={e => this.setState({ user: { ...this.state.user, email: e.target.value } })} />
                <br />
                {/* uppon press will open more  information regarding the user */}
                {/* functionality buttons */}
                <input type="button" value="delete" onClick={this.useDelete}  ></input>
                <input type="button" value="Update" onClick={this.UpdateUser} />
                <br />
                <input type="button" value="other Data"
                    onMouseOver={() => this.setState({ isOtherDataVisible: true })} onClick={() => this.setState({ isOtherDataVisible: false })} />
                {this.state.isOtherDataVisible && <MoreInfoComp user={this.props.user} sendUseSendUpdate={(addressData) => this.setState({ address: addressData })} />}
            </div>


        )
    }
}
export default UserCardComp