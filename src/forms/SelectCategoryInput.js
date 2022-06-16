import * as React from 'react'
import InputContainer from '../components/InputContainer'
import SelectInput from '../components/SelectInput'
import axios from '../api'
import Box from '@mui/material/Box'

const SelectCategoryInput = ({ disabled }) => {
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`categories`)
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <InputContainer disabled={disabled} label="Categoría" md={3} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='category_id'
                    placeholder='Seleccione una categoría'
                    options={options}
                    source='category_id'
                />
            )}
        </InputContainer>
    )
}

export default SelectCategoryInput
