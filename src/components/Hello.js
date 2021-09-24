import React from "react"

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi {this.props.name}</h1>
            </div>
        )
    }

}