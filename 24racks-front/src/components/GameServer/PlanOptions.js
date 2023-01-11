import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

function PlanOptions({options, setChangeOption, postPlan}){
  const changePlanxID = (id_plan) => {
    const plan = options.find( elem => id_plan === elem.id_plan.toString());
    postPlan(plan.id_plan);
    setChangeOption(plan);
  };

  if (options !== []) return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="plan"
        defaultValue= ""
        helperText="Please select your plan"
      >
        {
            options.map((option) => (
              <MenuItem key={option.id_plan} value={option.id_plan} onClick= { (e) => changePlanxID(e.target.dataset.value) }>
                {option.id_plan}
              </MenuItem>
            ))
        }
      </TextField>
      
    </div>
  );
  else return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="plan"
        defaultValue= ""
        helperText="Please select your plan"
      >
        <MenuItem value= "No plans available">
          No plans available
        </MenuItem>
      </TextField>
      
    </div>
  );
}

export default PlanOptions;