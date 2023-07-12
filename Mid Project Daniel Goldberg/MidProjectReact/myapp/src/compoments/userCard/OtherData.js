import React, { Component } from 'react'


class MoreInfoComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: {
                street: this.props.user.address.street,
                city: this.props.user.address.city,
                zipcode: this.props.user.address.zipcode
            }
        }

    }

    componentDidUpdate = (prevProps, PrevState) => {
        if (this.state !== PrevState) {
            let addressObj = {
                street: this.state.street,
                city: this.state.city,
                zipcode: this.state.zipcode,
            }

            this.props.sendUseSendUpdate(addressObj)
            console.log(addressObj)

        }

    }



    render() {
        return (
            <div style={{ border: '2px solid black', background: "solid gray" }}>
                <h3>Other Data</h3>
                Street: <input type="text" defaultValue={this.state.address.street} onChange={e => this.setState({ street: e.target.value })} />
                <br />
                City: <input type="text" defaultValue={this.state.address.city} onChange={e => this.setState({ city: e.target.value })} />
                <br />
                zipcode:<input type="text" defaultValue={this.state.address.zipcode} onChange={e => this.setState({ zipcode: e.target.value })} />
                <br />
            </div>
        )
    }
}
export default MoreInfoComp