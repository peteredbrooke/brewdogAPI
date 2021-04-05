import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.scss";
import Button from "../Button"



const NavBar = (props) => {
    const {updateSearchText, updateBeerABV} = props; 

    return (
        <div className={styles.NavBar}>
             <h1>BREWDOG API</h1>
            <SearchBar placeholder="Search here.." updateSearchText={updateSearchText} updateBeerABV={updateBeerABV} />
            {/* <Button/> */}
        </div>
    )
}

export default NavBar
