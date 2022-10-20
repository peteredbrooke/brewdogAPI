import React from 'react'
import styles from "./Card.module.scss"

const Card = (props) => {
    const { name, tagline, description, abv, image } = props.beer; 
    
    return (
        <div className={styles.card}>
            <img className={styles.beerImage} src={image} />
            <div className={styles.cardTitle}>
                <h1>{name}</h1>
                <h3>"{tagline}"</h3>
            </div>
            <div className={styles.textSpace}>
                <p>{description}</p>
            </div>
            <h4> ABV {abv} %</h4>

        </div>
    )
}

export default Card
