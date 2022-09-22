import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

const SearchExpand = () => {

  const [SearchExpand, setSearchExpand] = useState(true)

  const handleClick = () => {
      setSearchExpand(SearchExpand => !SearchExpand)
  }

  useEffect(() => {
    
  }, [SearchExpand])
  

  return (
    <SearchMain>
        <SearchBox se = {SearchExpand}>
            <input type="text" placeholder='Enter Something to Search'/>
        </SearchBox>
        <SearchBtn>
            <button onClick={handleClick}><SearchIcon/></button>
        </SearchBtn>
    </SearchMain>
  )
}

const SearchMain = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: auto;
    height: 80px;
`
const SearchBox = styled.div`
  width: ${props=>props.se==true?"0%":"93%"};
  display: flex;
  transition: width 0.3s cubic-bezier(0.000, 0.795, 0.000, 1.000);
  justify-content: center;
  align-items: center;
  & input {
    width: 100%;
    height: 50px;
    padding: ${props=>props.se==true?"0px":"8px"};
    border: ${props=>props.se==true?"none":"2px solid lightcoral"};
    padding-left: 20px;
  }
`
const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    padding: 10px;
    color: white;
    background-color: lightcoral;
    border: 2px solid lightcoral;
  }

`

export default SearchExpand