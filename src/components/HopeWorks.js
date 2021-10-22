import React from "react"

export default class HopeWorks extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            name: 'Brandon'
        }
    }

    render() {
        return (
        <h1>Hello {this.state.name}</h1>
        )
    }
}