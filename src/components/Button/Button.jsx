import React from 'react'
import styles from "./Button.module.scss"


const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick} className={styles.btn}>Find me tasty suds</button>
        </div>
    )
}

export default Button
