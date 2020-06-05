import React from 'react'
import Styles from './NotFound.module.css'

const notFound = (props:{message: string}) => {
    return (
        <div className={Styles.NotFoundContainer}>
            <span className={Styles.NotFoundMessage}> {props.message + ' '} not found <span className="material-icons"> sentiment_very_dissatisfied </span> </span>
        </div>
        
    )
}

export default notFound