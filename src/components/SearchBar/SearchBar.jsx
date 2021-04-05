import React, { useEffect, useState } from 'react'
import styles from "./SearchBar.module.scss"




const SearchBar = (props) => {
    const { placeholder, updateSearchText, updateBeerABV } = props; 
    const input = <input type="text" placeholder={placeholder}  onInput={e => updateSearchText(e.target.value)} className={styles.searchBar}/> 


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

    


    // on change of slider value, display beers with maximum value only 
    // on change of slider display the max value in text above slider bar  
    // do this with or without the use of the search bar???
    // only display results after search bar has input??


    return (
        <div className={styles.search}>
            <p className={styles.searchText}>SEARCH</p>
            {input} 
            <p className={styles.searchText}>SET MAX ABV %</p> 
            {slider}
            {sliderValue + " " + "ABV %"}
        </div>
    )
}

export default SearchBar
