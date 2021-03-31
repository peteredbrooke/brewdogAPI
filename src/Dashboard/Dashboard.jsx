import React from 'react'
import styles from "./Dashboard.module.scss"
import CardList from "../CardList";


const Dashboard = (props) => {
    const { beers, allBeers } = props;  

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
