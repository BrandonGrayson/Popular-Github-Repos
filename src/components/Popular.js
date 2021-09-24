import React from "react";
import Proptypes from "prop-types"

function LanguagesNav({selected, onUpdateLanguage}) {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]
    return (
        <ul className="flex-center">
            {languages.map((language) => (
               <li key={language}>
                   <button className="btn-clear nav-link"
                   onClick={() => onUpdateLanguage(language)}
                   style={language === selected ? {color: 'rgb(187, 46, 31)'} : null }> {language} </button>
               </li>
            ))}  
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: Proptypes.string.isRequired,
    onUpdateLanguage: Proptypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: "All"
        }
        this.updateLanguage = this.updateLanguage.bind(this)

    }
    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    

    render() {
        const { selectedLanguage } = this.state
        return (
        <React.Fragment>
           <LanguagesNav 
           selected={selectedLanguage}
           OnUpdateLanguage={this.updateLanguage}/> 
        </React.Fragment>
        )
    }
    
}