import { useState } from 'react'
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
    const [valid,setValid] = useState(-1);

    function checkValidity(event)
    {
        let validity = -1;
        if (event.target.value==="")
        {
            validity = -1
        }
        else if (isNaN(event.target.value))
        {
            validity = 0
        }
        else
        {
            if (props.checkInt)
            {
                if (Number.isInteger(parseFloat(event.target.value)))
                {
                    validity = 1;
                }
                else
                {
                    validity = 0
                }
            }
            else
            {
                validity = 1;
            }
        }

        if (validity===1)
        {
            props.setValue(event.target.value);
        }
        else
        {
            props.setValue(0);
        }
        
        setValid(validity);
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
