import React from 'react'

function Navbar(props) {
  return (
    <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            onChange={props.handleChange}
          />
          <button onClick={props.getData}>Search</button>
        </div>
      </nav>
  )
}

export default Navbar