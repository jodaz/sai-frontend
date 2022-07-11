import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useGetQueryFromParams from '../../hooks/useGetQueryFromParams';
import { useFormState } from 'react-final-form'
import axios from '../../api'
import Box from '@mui/material/Box'

const ControlledSelectInput = ({ id, disabled }) => {
    const params = useGetQueryFromParams({
        filter: { sector_id: id}
    })
    const [options, setOptions] = React.useState([])

    const fetchOptions = async () => {
        const { data: { data } } = await axios.get(`streets`, { params: params })
        setOptions(data)
    };

    React.useEffect(() => {
        fetchOptions();
    }, [id])

    return (
        <InputContainer disabled={disabled} label="Calle" md={3} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='street_id'
                    placeholder='Sector'
                    options={options}
                    source='street_id'
                />
            )}
        </InputContainer>
    )
}

const SelectStreetSelector = () => {
    const { values: { sector_id } } = useFormState();

    if (!sector_id) return null;

    return <ControlledSelectInput id={sector_id} />
}

export default SelectStreetSelector
