import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  // ❗ Create state to hold the data from the API
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  // ❗ Create effects to fetch the data and put it in state

  // Fetch data for planets
  useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
        console.log(res.data);
        setPlanets(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Fetch data for people
  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch(err => console.error(err));
  }, []);



  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>

      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map(person => {

      // homeWold
      // id of planet
      //getting the planet name on to the person object
      const result = planets.filter((planet) => planet.id === person.homeworld)
      console.log(result)
      person.planetName = result[0].name
        
      return  <Character key={person.id} person={person} />
})}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
