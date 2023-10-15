import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
//import { Grid } from '@mui/material';
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
    const [helperText,setHelperText] = useState("");
    const [editBoxValue,setEditBoxValue] = useState("");

    useEffect(()=>{       

        function decideHelperText()
        {
            if (valid===0)
            {
                setHelperText(props.errorMessage);
            }
            else if (valid===1)
            {
                setHelperText(props.successMessage);
            }
            else
            {
                setHelperText(props.defaultMessage);   
            }
        }
        
        //set the helper text
        decideHelperText();
        //set the edit box value
        if (valid===1)
        {
            if (props.checkInt)
                props.setValue(parseInt(editBoxValue));
            else
                props.setValue(parseFloat(editBoxValue));
        }
        else
        {
            props.setValue(0);
        }
        // console.log("validity in useEffect",valid);
        // console.log("editBoxValue",editBoxValue);
        
    },[valid, editBoxValue, props]);



    function checkValidity(event)
    {
        setEditBoxValue(event.target.value);
        if (event.target.value==="")
        {
            setValid(-1)
        }
        else if (isNaN(event.target.value))
        {
            setValid(0)
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
        //onBlur={checkValidity}
        onChange={checkValidity}
        helperText={helperText}
        >
        </TextField>
        // <FormControl fullWidth margin="normal" variant="outlined">
        //     <InputLabel>{props.label}</InputLabel>
        //     <Input endAdornment={<InputAdornment position="end">{props.unit}</InputAdornment>}/>
        //     <TheFormHelper props={props}/>
        // </FormControl>
    )
}
