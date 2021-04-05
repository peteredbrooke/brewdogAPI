import React from 'react'
import styles from "./Dashboard.module.scss"
import CardList from "../CardList";


const Dashboard = (props) => {
    const { beers, allBeers } = props;  

    // If beers has not been searched set card default to all beers
    const contentJsx = beers.length > 0 ? (
        <CardList beers={beers} />
    ) : <CardList beers={allBeers} /> ; 

    return (
        <div>   
            {contentJsx}
        </div>
    )
}

export default Dashboard
