import { Search } from '@mui/icons-material'
import React from 'react'

const SearchContainer = () => {
  return (
    <div className='searchContainer'>
      <form action='/search'>
        <div>
            <input type="search" name='title' placeholder='search location...'/>
            <button>{<Search/>}</button>
        </div>
      </form>
    </div>
  )
}

export default SearchContainer
