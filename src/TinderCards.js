import React, { useEffect } from 'react';
import './TinderCards.css';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const[people,setPeople] = useState([]);

    useEffect(()=>{
      
    },[])

    const swiped = (direction, nameToDelete) => {
      console.log("removing: "+ nameToDelete);
      // setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
      console.log(name+"left the screen!");
    };

  return (
    <div className='tinderCards'>
          <div className="tinderCards__cardContainer">
              {people.map(person => (
                <TinderCard
                  className='swipe'
                  key={person.name}
                  preventSwipe={["up","down"]}
                  onSwipe={(dir) => swiped(dir,person.name)}
                  onCardLeftScreen={() => outOfFrame(person.name)}
                >
                  <div 
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card"
                  >
                      <h3>{person.name}</h3>
                  </div>
                </TinderCard>
            ))}
            </div>
            
    </div>
  );
}

export default TinderCards;