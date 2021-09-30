import React from "react"
import { battle } from "../utils/api"

export default class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            winner: null,
            loser: null,
            error: null,
            isLoading: true
        }
    }
    componentDidMount() {
        const {playerOne, playerTwo} = this.props

        battle([playerOne, playerTwo])
        .then((players) => {
            console.log("data: ", players)
            // update the state of our component
            this.setState({
                winner: players[0],
                loser: players[1],
                error: null,
                isLoading: false
            })

            // add error handling to UI layer
        }).catch(({message}) => {
            this.setState({
                error: message,
                isLoading: false
            })
        })
    }

    render() {
      return (
        <div>
          Results
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      )
    }
  }