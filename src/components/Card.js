import React from "react"
import Proptypes from "prop-types"
import ThemeContext from "../contexts/theme"

export default function Card({ header, subheader, avatar, href, name, children }) {
    const theme = React.useContext(ThemeContext)
    return (

        <div className={`card bg-${theme}`}>
            <h4 className='header-lg center-text'>
                {header}
            </h4>
            <img
                className='avatar'
                src={avatar}
                alt={`Avatar for ${avatar}`}
            />
            {subheader && (
                <h4 className='center-text'>
                    Score: {subheader}
                </h4>
            )}

            <h2 className='center-text'>
                <a className='link' href={href}>
                    {name}
                </a>
            </h2>
            {children}
        </div>
    )
}

Card.prototypes = {
    header: Proptypes.string.isRequired,
    subheader: Proptypes.string,
    avatar: Proptypes.string.isRequired,
    href: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired
}