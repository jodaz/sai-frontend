import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useGetQueryFromParams from '../../hooks/useGetQueryFromParams';
import { useFormState } from 'react-final-form'
import axios from '../../api'
import Box from '@mui/material/Box'

const ControlledSelectInput = ({ id, disabled }) => {
    const params = useGetQueryFromParams({
        filter: { parish_id: id}
    })
    const [options, setOptions] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`communities`, { params: params })
        setOptions(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [id])

    return (
        <InputContainer disabled={disabled} label="Comunidad" md={3} xs={12}>
            {(!Object.entries(options).length) ? (
                <Box marginTop='0.5rem' fontSize='0.9rem' fontWeight={300}>
                    Sin datos
                </Box>
            ) : (
                <SelectInput
                    name='community_id'
                    placeholder='Comunidad'
                    options={options}
                    source='community_id'
                />
            )}
        </InputContainer>
    )
}

const SelectCommunityInput = () => {
    const { values: { parish_id } } = useFormState();

    if (!parish_id) return null;

    return <ControlledSelectInput id={parish_id} />
}

export default SelectCommunityInput
