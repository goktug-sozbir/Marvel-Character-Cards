import React from 'react'
import CharacterItems from './characterItems'

const characterTable = ({items,isLoading}) => {

  return isLoading ? <h1>Loading...</h1> :
  <section className="contents">
      {
          items.map((item) =>(
              <CharacterItems key={item.id} item={item}/>
          ))
      }
  </section>
}

export default characterTable