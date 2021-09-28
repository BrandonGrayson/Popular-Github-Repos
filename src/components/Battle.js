import React from "react"
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'
import PropTypes from "prop-types"

class PlayerInput extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            userName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit (event) {

        event.preventDefault()

        this.props.onSubmit(this.state.userName)
            
    }

    handleChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="column player">
                <label htmlFor="username" className="player-label">
                    {this.props.label}
                </label>
                <div className="row player-inputs">
                    <input 
                        type="text"
                        id="username"
                        className="input-light"
                        placeholder="github username"
                        autoComplete="off"
                        value={this.state.userName}
                        onChange={this.handleChange}/>
                    <button
                     className='btn dark-btn'
                     type="submit"
                     disabled={!this.state.userName}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

PlayerInput.prototypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

function Instructions () {
    return (
      <div className='instructions-container'>
        <h1 className='center-text header-lg'>
          Instructions
        </h1>
        <ol className='container-sm grid center-text battle-instructions'>
          <li>
            <h3 className='header-sm'>Enter two Github users</h3>
            <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>Battle</h3>
            <FaFighterJet className='bg-light' color='#727272' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>See the winners</h3>
            <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
          </li>
        </ol>
      </div>
    )
}

export default class Battle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerOne: null,
            playerTwo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(id, player) {
        this.setState({
            [id]: player
        })
    }
    render() {
        const {playerOne, playerTwo} = this.state
        return (
          <React.Fragment>
            <Instructions />
            <div className="players-container">
                <h1 className="center-text header-lg"> Players</h1>
                <div className="row space-around">
                    {playerOne === null && (
                        <PlayerInput 
                         label="Player One"
                         onSubmit={(player) => this.handleSubmit("PlayerOne", player)} />
                    )}
                    {playerTwo === null && (
                        <PlayerInput 
                         label="Player Two"
                         onSubmit={(player) => this.handleSubmit("PlayerTwo", player)} />
                    )}
                </div>
            </div>
          </React.Fragment>
        )
    }
}