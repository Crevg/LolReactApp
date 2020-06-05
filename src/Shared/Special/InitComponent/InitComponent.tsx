import React from 'react'
import Styles from './InitComponent.module.css'

const initComponent = (props:{message: string}) => {
    return (
        <div className={Styles.InitContainer}>
            <span className={Styles.InitMessage}> {props.message + ' '} </span>
        </div>
        
    )
}

export default initComponent