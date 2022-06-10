import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';
import { useFormState } from 'react-final-form'

const ControlledSelectInput = ({ id }) => {
    const { 
        data, total
    } = useFetch('/communities', {
        filter: { parish_id: id }
    })

    if (!total) return null;

    return (
        <InputContainer label='Comunidad' md='3'>
            <SelectInput
                name="community_id"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

const SelectCommunityInput = () => {
    const { values: { parish_id } } = useFormState();

    if (!parish_id) return null;

    return <ControlledSelectInput id={parish_id} />
}

export default SelectCommunityInput
