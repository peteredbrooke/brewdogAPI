import React from 'react'
import styles from "./CardList.module.scss"
import Card from "../components/Card"

const CardList = (props) => {

    const { beers } = props; 

    const getBeerJsx = (beer) => {
       return <div key={beer.id}>
                  <Card beer={beer}/>
              </div>
    }



    return (
      // If beers has not been searched set card default to all beers  
        <div className={styles.cardlist}>
          
          {beers.map(getBeerJsx)} 
           
        </div>
    )
}

export default CardList
