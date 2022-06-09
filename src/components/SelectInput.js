import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import { Field } from 'react-final-form'

const ControllableSelectInput = props => {
    const {
        meta: { touched, error, submitError, initial } = { touched, initial, error, submitError },
        input: { onChange, value, ...restInputProps },
        meta,
        options,
        property,
        inputProps
    } = props;
    const [defaultValue] = React.useState((() => {
        if (value && options.length) {
            return options.find(item => item.id == value);
        } else {
            return null;
        }
    })());

    if (!options.length) return null;

    return (
        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-marginDense MuiFormControl-fullWidth" style={{ width: '100%' }}>
            <Autocomplete
                {...restInputProps}
                options={options}
                getOptionLabel={(option) => option[property]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...inputProps}
                    />
                )}
                defaultValue={defaultValue}
                onChange={(event, option) => (onChange(option.id))}
            />
            {meta.error && meta.touched && <FormHelperText error>{meta.error}</FormHelperText>}
        </FormControl>
    );
}

const Select = props => (
    <Field
        component={ControllableSelectInput}
        {...props}
    />
);

ControllableSelectInput.defaultProps = {
    property: 'name'
}

export default Select;
