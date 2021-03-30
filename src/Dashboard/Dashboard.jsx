import React from 'react'
import styles from "./Dashboard.module.scss"
import CardList from "../CardList";


const Dashboard = (props) => {

    const beers  = props.beers; 

    const contentJsx = beers.length? (
        <CardList beers={beers} />
    ) : null; 
    

    return (
        <div>
            {/* <ul>
                {
                    beers.map((beer) => {
                        return <li>{beer.name}</li>
                    })
                }
            </ul> */}
            {contentJsx}
        </div>
    )
}

export default Dashboard
