import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.scss";
import Button from "../Button"

const NavBar = (props) => {
    const {updateSearchText} = props; 
    return (
        <div className={styles.NavBar}>
            <h1>Get Dem Beers in Meeeeee!</h1>
            <SearchBar placeholder="Search here.." updateSearchText={updateSearchText} />
            {/* <Button/> */}
        </div>
    )
}

export default NavBar
