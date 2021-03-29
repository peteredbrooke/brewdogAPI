import React from 'react'
import styles from "./SearchBar.module.scss"

const SearchBar = (props) => {
    const { placeholder, updateSearchText } = props; 
    const input = <input type="text" placeholder={placeholder}  onInput={e => updateSearchText(e.target.value)} className={styles.searchBar}/> 
    return (
        <div className={styles.search}>
            <h1>Search here for Beers</h1>
            {input}  
        </div>
    )
}

export default SearchBar
