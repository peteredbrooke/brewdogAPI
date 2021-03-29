import React, { useEffect, useState } from "react"
import styles from "./App.module.scss"
import NavBar from "./components/NavBar"
import Dashboard from "./Dashboard"


function App() {
  const [beers, setBeers] = useState("");
  
  // const getBeerData = (beer) => {
  //   let beerData = [];
  //   Object.keys(recipe).forEach((key) => {
  //     if (key.includes("id", ))
  //   })
  // }

  useEffect(() => {
    fetchBeers();
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
      const cleanBeers = response.map(cleanBeerData)
      setBeers(cleanBeers)
      console.log(response)
    })
  }

  return (
    <>
    <div>
      <h1>Find your favourite Brewdog</h1>
        <div className={styles.content}>
            {/* <Header /> */}
            <NavBar updateSearchText={fetchBeers}/>
            <Dashboard beers={beers} />
        </div>
    </div>
    </>
  );
}

export default App;
