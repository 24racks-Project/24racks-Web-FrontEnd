import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

function GamesOptions({options, setChangeGame, postGame}) {
  const changeGamexID = (id_service) => {
    const service = options.find( elem => id_service === elem.id_service.toString());
    postGame(service.id_service);
    setChangeGame(service);
  };

  if (options === []) return (
    <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Game"
              defaultValue={''}
              helperText="Please select your game"
            >
            <MenuItem disabled value= "No games available">
                No games available
            </MenuItem>
        </TextField>
        
      </div>
  );
  else return (
    <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Game"
            defaultValue={''}
            helperText="Please select your game"
          >
          {
              options.map(
                (option) => (
                <MenuItem key={option.id_service} value={option.id_service} onClick= { (e) => changeGamexID(e.target.dataset.value) }>
                  {option.name}
                </MenuItem>
              ))
          }
      </TextField>
    </div>
  ); 
}

export default GamesOptions;