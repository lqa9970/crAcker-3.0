import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import './Search.scss'

const Search = () => {
  return (
    <div className="search__content">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Coin search..."
          variant="outlined"
        />
      </Box>
    </div>
  )
}

export default Search
