import React, {useState} from 'react'

const Search = (search) => {
    const[text,setText] = useState('')

    const onSearched = (q) => {
        setText(q)
        search(q)
    }

  return (

    <section className="search">
        <form>
            <input type= "text" 
            className="form-control"
            placeholder="Find a Character"
            autoFocus
            onChange={(e)=>onSearched(e.target.value)}
            value={text}
            />
        </form>
    </section>

  )
}

export default Search