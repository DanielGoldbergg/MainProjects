import React, { Component } from 'react'
import UserCardComp from './userCard/UserCard'
import Utils from '../utils/userUtils'
import SearchComp from './userCard/searcBar'

class MainComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: [],
            usersToRender: [],
            isDivShown: false,
            newObj: { id: '', name: '', email: '', address: { street: '', city: '', zipcode: '' } }
        }
    }
    //gets Full Data.
    async componentDidMount() {
        let userData = await Utils.getShapedData();
        this.setState({ Users: userData })
        this.setState({ usersToRender: userData })
        console.log(userData)

    }

    componentDidUpdate() {
        console.log('HI')
        console.log(this.state.Users)
    }

    addNewUser = () => {
        let idToAdd = this.state.Users[this.state.Users.length - 1].id + 1
        let userToAdd = {
            ...this.state.newObj,
            id: idToAdd
        }
        this.setState({ newObj: userToAdd })
        this.setState({ isDivShown: false })
        this.setState(prevState => ({ Users: [...prevState.Users, prevState.newObj] }))
        this.setState(prevState => ({ usersToRender: [...prevState.usersToRender, prevState.newObj] }))
    }

    update = (data) => {
        let newUsers = this.state.usersToRender.map(user => {
            if (user.id == data.id) {
                return data
            }
            else {
                return user
            }
        })
        this.setState({ Users: newUsers })
        this.setState({ usersToRender: newUsers })

    }
    delete = (id) => {
        let userNotDeleted = this.state.Users.filter(user => {
            if (user.id !== id) {
                return user
            }
        })
        this.setState({ Users: userNotDeleted })
        this.setState({ usersToRender: userNotDeleted })
    }

    newUser = () => {
        this.setState({ isDivShown: !this.state.isDivShown })
    }


    render() {
        let userToRender = this.state.usersToRender.map(user => {
            return <UserCardComp key={user.id} user={user} Users={this.state.Users}
                sendUpdate={(data) => this.update(data)}
                sendDelete={(id) => this.delete(id)} />
        })
        return (
            <div style={{ border: '3px solid black' }}>
                <h1>Main</h1>
                <input type="button" value="Add" onClick={this.newUser} /> <br />
                Add New User <br />
                Name:<input type='text' onChange={(e) => { this.setState({ newObj: { ...this.state.newObj, name: e.target.value } }) }} /><br />
                Email:<input type='text' onChange={(e) => { this.setState({ newObj: { ...this.state.newObj, email: e.target.value } }) }} /><br />
                <input type='button' value='ADD' onClick={this.addNewUser} />
                <br /><br />
                <SearchComp changeUserArr={data => { this.setState({ usersToRender: data }) }} Users={this.state.Users} />
                <br />
                {userToRender}


            </div>
        )
    }
}

export default MainComp