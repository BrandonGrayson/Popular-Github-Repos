import { render } from "@testing-library/react"
import React from "react"

export default class HopeWorks extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Brandon'
        }
    }

    render() {
        return (
        <h1>Enter a Todo List {this.state.name}</h1>
        )
    }
}