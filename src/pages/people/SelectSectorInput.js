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

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`sectors`, { params: params })
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <InputContainer disabled={disabled} label="Sector" md={3} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='sector_id'
                    placeholder='Sector'
                    options={options}
                    source='sector_id'
                />
            )}
        </InputContainer>
    )
}

const SelectCommunityInput = () => {
    const { values: { community_id } } = useFormState();

    if (!community_id) return null;

    return <ControlledSelectInput id={community_id} />
}

export default SelectCommunityInput
