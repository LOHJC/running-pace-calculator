import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import Input from '@mui/material/Input';
// import { InputLabel } from '@mui/material';

// function TheFormHelper({props}) {
//     const status = useFormControl() || {};

//     const helperText = React.useMemo(() => {
//         if (status.focused) 
//         {
//           return props.focusMessage;
//         }
    
//         return props.defaultMessage;
//       }, [status, props]);
//     return <FormHelperText>{helperText}</FormHelperText>;
// }


export const NumberEditbox = (props) => {
    // -1 = empty
    // 0 = invalid
    // 1 = valid
    const [valid,setValid] = useState(2);

    function checkValidity(event)
    {
        if (event.target.value==="")
        {
            setValid(-1);
        }
        else if (isNaN(event.target.value))
        {
            setValid(0);
        }
        else
        {
            if (props.checkInt)
            {
                if (Number.isInteger(parseFloat(event.target.value)))
                {
                    setValid(1);
                }
                else
                {
                    setValid(0);
                }
            }
            else
            {
                setValid(1);
            }
        }
    }

    function decideHelperText()
    {
        if (valid===0)
        {
            return props.errorMessage;
        }
        else if (valid===1)
        {
            return props.successMessage;
        }

        return props.defaultMessage;
    }

    function decideColor()
    {
        if (valid===0)
        {
            return "error";
        }
        else if (valid===1)
        {
            return "success";
        }

        return "primary";
    }

    return (
        <TextField fullWidth label={props.label} variant="outlined" margin="normal"
        InputProps={{
            endAdornment: <InputAdornment position="end">{props.unit}</InputAdornment>,
        }}
        error={!valid}
        color={decideColor()}
        onFocus={checkValidity}
        onBlur={checkValidity}
        onChange={checkValidity}
        helperText={decideHelperText()}
        >
        </TextField>

        // <FormControl fullWidth margin="normal" variant="outlined">
        //     <InputLabel>{props.label}</InputLabel>
        //     <Input endAdornment={<InputAdornment position="end">{props.unit}</InputAdornment>}/>
        //     <TheFormHelper props={props}/>
        // </FormControl>
    )
}
