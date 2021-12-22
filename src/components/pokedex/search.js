import React from 'react'
const Search = ()=>{
  return(
    <div className="pokedex-filter-header">
        <div>
          <div className="column-6 push-1">
            <div className="filter-text-search">
              <label>Name or Number</label>
              <span className="twitter-typeahead">
                <input
                  data-type="name"
                  type="text"
                  id="searchInput"
                  className="button-white tt-input"
                  autocomplete="off"
                  spellcheck="false"
                  dir="auto"
                  />
                <pre aria-hidden="true"></pre>
                <div className="tt-menu">
                  <div className="tt-dataset tt-dataset-0"></div>
                </div>
              </span>
              <input
                type="submit"
                className="button-search"
                icon = "search"
                value="Search"
                id="search"
              />
            </div>
          </div>
          <div className="column-6 push-7">
            <div className="content-block content-block-full">
              <div className="banner banner-green">
                <h2>
                  Search for a Pokémon by name or using its National Pokédex
                  number.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Search;