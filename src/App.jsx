import React, { useEffect, useState } from "react"
import styles from "./App.module.scss"
import NavBar from "./components/NavBar"
import Dashboard from "./Dashboard"


function App() {
  const [beers, setBeers] = useState([]);
  const [ allBeers, setAllBeers ] = useState([]); 
  
  // const getBeerData = (beer) => {
  //   let beerData = [];
  //   Object.keys(recipe).forEach((key) => {
  //     if (key.includes("id", ))
  //   })
  // }

  useEffect(() => {
    fetchBeers();
    fetchAllBeers();
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

  // Function to fetch all beers as default?? 
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
    <NavBar updateSearchText={fetchBeers}/>
        <div className={styles.content}>
            
            <Dashboard beers={beers} allBeers={allBeers}/>
        </div>
    </div>
    </>
  );
}

export default App;
