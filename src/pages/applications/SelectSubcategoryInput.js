import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useGetQueryFromParams from '../../hooks/useGetQueryFromParams';
import { useFormState } from 'react-final-form'
import axios from '../../api'
import Box from '@mui/material/Box'

const ControlledSelectInput = ({ id, disabled }) => {
    const params = useGetQueryFromParams({
        filter: { category_id: id}
    })
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`subcategories`, { params: params })
        setOptions(data)
    }, [params]);

    React.useEffect(() => {
        fetchOptions();
    }, [id])

    return (
        <InputContainer disabled={disabled} label="Subcategoría" md={6} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='subcategory_id'
                    placeholder='Seleccione una subcategoría'
                    options={options}
                    source='subcategory_id'
                />
            )}
        </InputContainer>
    )
}

const SelectSubcategoryInput = () => {
    const { values: { category_id } } = useFormState();

    if (!category_id) return null;

    return <ControlledSelectInput id={category_id} />
}

export default SelectSubcategoryInput
