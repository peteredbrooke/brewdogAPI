import React from 'react'
import SearchBar from "../SearchBar";
import styles from "./Header.module.scss"


const Header = (props) => {
    const {updateSearchText} = props;
    return (
        <div className={styles.header}>
            <h1>Find your favourite Brewdog</h1>
            <SearchBar placeholder="Search here.." updateSearchText={updateSearchText} />
        </div>
    )
}

export default Header
