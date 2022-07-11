import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import Box from '@mui/material/Box'
import axios from '../../api'

const SelectEntityInput = ({ disabled, name }) => {
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`entities`)
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <InputContainer disabled={disabled} label="Dependencia" md={6} xs={6}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name={name}
                    placeholder='Seleccione'
                    options={options}
                    source='name'
                />
            )}
        </InputContainer>
    )
}

export default SelectEntityInput
