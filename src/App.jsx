import React, { useEffect, useState } from "react"
import styles from "./App.module.scss"
import NavBar from "./components/NavBar"
import Dashboard from "./Dashboard"


function App() {
  const [beers, setBeers] = useState([]);
  const [ allBeers, setAllBeers ] = useState([]); 
  

  useEffect(() => {
    fetchBeers();
    fetchAllBeers();
    fetchBeerABV();
  }, [0])

  const cleanBeerData = (beer) => {
    const cleanedBeer = {
      name: beer.name, 
      tagline: beer.tagline,
      description: beer.description, 
      abv: beer.abv, 
      image: beer.image_url
    }
    return cleanedBeer;
  }

  const fetchBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`).then((response) => {
      return response.json();
    })
    .then((response) => {
      if (!searchTerm) {
        return;
      }
      const cleanBeers = response.map(cleanBeerData)
      setBeers(cleanBeers)
      console.log(response)
    })
    
  }

  const fetchBeerABV = (searchAbv) => {
    fetch(`https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_lt=${searchAbv}`).then((response) => {
      return response.json();
    })
    .then((response) => {
      if (!searchAbv) {
        return;
      }
      const cleanBeers= response.map(cleanBeerData)
      setBeers(cleanBeers)
      console.log(response); 
    })
  }

  const fetchAllBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers`).then((response) => {
      return response.json();
    })
    .then((response) => {
      const cleanBeers = response.map(cleanBeerData)
      setAllBeers(cleanBeers)
      console.log(response)
    })
  }



  return (
    <>
    <div>
      
    <NavBar updateSearchText={fetchBeers} updateBeerABV={fetchBeerABV}/>
        <div className={styles.content}>
            
            <Dashboard beers={beers} allBeers={allBeers}/>
        </div>
        
    </div>
    </>
  );
}

export default App;
