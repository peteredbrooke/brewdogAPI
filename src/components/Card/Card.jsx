import React from 'react'
import styles from "./Card.module.scss"

const Card = (props) => {
    const { name, tagline, description, abv, image } = props.beer; 
    
    return (
        <div className={styles.card}>
            <img src={image} />
            <h1>{name}</h1>
            <h3>"{tagline}"</h3>
            <p>{description}</p>
            <h4> ABV {abv} %</h4>

        </div>
    )
}

export default Card
