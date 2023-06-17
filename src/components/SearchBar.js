import React ,{useState} from 'react'
import { TextField } from '@mui/material'
import List from '../Lists/List'
import "./SearchBar.css"

const SearchBar = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  return (
    <div className="main">
      
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar ;
