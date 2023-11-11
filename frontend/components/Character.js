import React, { useState } from 'react';

function Character({ person }) {
  // Create a state to hold whether the homeworld is rendering or not
  const [isPlanetVisible, setIsPlanetVisible] = useState(false);

  // Create a "toggle" click handler to show or hide the homeworld
  const toggleHomeworld = () => {
    setIsPlanetVisible(!isPlanetVisible);
  };

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{person.name}</h3>

      {/* Display homeworld if isPlanetVisible is true */}
      {isPlanetVisible && (
        <p className='character-planet'>Homeworld: {person.planetName}</p>
      )}
    </div>
  );
}

export default Character;
