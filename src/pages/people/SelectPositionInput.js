import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import axios from '../../api'
import Box from '@mui/material/Box'

const SelectPositionInput = ({ disabled }) => {
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`positions`)
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <InputContainer disabled={disabled} label="Cargo" md={3} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (            
                <SelectInput
                    name="positions"
                    placeholder="Nombre"
                    fullWidth
                    options={options}
                    multiple
                />
            )}
        </InputContainer>
    )
}

export default SelectPositionInput
