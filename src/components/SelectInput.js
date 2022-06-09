import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import { Field } from 'react-final-form'

const ControllableSelectInput = props => {
    const {
        meta: { touched, error, submitError, initial } = { touched, initial, error, submitError },
        input: { onChange, value, multiple, ...restInputProps },
        meta,
        options,
        property,
        inputProps
    } = props;
    const [defaultValue] = React.useState((() => {
        if (multiple && value.length && options.length) {
            return options.filter(item => value.includes(item)).filter((item, index, self) => self.indexOf(item) === index);
        } else if (!multiple && value && options.length) {
            return options.find(item => item.id == value);
        } else {
            return multiple ? [] : null;
        }
    })());

    const handleChange = (event, option) => (onChange(option.id))

    const handleMultipleChange = (event, option) => (onChange(option.map(items => items.id)))

    if (!options.length) return null;

    return (
        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-marginDense MuiFormControl-fullWidth" style={{ width: '100%' }}>
            <Autocomplete
                multiple={multiple}
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
                onChange={multiple ? handleMultipleChange : handleChange}
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
