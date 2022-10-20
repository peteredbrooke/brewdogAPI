import React, { useEffect, useState } from 'react'
import styles from "./SearchBar.module.scss"




const SearchBar = (props) => {
    const { updateSearchText, updateBeerABV } = props; 
    const input = <input type="text" placeholder="Search...."  onInput={e => updateSearchText(e.target.value)} className={styles.searchBar}/> 


    const [ sliderValue, setSliderValue ] = useState("5");
    
    const handleChange = (e) => {
        setSliderValue(e.target.value);
        return console.log("setting level" + e.target.value)

    } 

    const slider =
        <input
        type="range" 
        min= "1" 
        max="10" 
        onMouseUp={handleChange}
        onInput= {e => updateBeerABV(e.target.value)} 
        defaultValue={sliderValue} 
        className={styles.slider} />



    return (
        <div className={styles.search}>
            {/* <div className={styles.searchCon}>
                 
            </div> */}

            {input}
            <p className={styles.searchText}>Set-  {sliderValue + " " + "Abv %"}</p> 
            {slider}
            
            
        </div>
    )
}

export default SearchBar
