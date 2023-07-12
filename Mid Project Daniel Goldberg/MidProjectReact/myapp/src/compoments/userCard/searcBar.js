import React, { Component } from 'react'


class SearchComp extends Component {
    constructor(props) {
        super(props)
    }

    showBySearch = async (e) => {
        let nameInput = e.target.value.toLowerCase();
        let emailInput = e.target.value.toLowerCase();
        let newUserArr = this.props.Users.filter(user => user.name.toLowerCase().includes(nameInput)
            || user.email.toLowerCase().includes(emailInput));

        this.props.changeUserArr(newUserArr)
    }

    render() {
        return (
            <div>
                search <input type="text" onChange={this.showBySearch} />
            </div>
        )
    }
}

export default SearchComp