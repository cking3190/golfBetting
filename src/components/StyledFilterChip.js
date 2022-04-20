import React from "react";
import {
    Chip,
    Avatar,
    CssBaseline
} from '@mui/material'

function StyledFilterChip(props) {

  return (<Chip
            {...props}
            color= {props.active ? 'primary' : 'secondary'}
            variant={props.active ? 'filled' : 'outlined'}
            label={props.label}
            >
          </Chip>);
}

export default StyledFilterChip;