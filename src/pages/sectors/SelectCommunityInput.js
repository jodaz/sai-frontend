import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';

const SelectCommunityInput = () => {
    const { 
        data, total
    } = useFetch('/communities')

    if (!total) return null;

    return (
        <InputContainer label='Comunidad'>
            <SelectInput
                name="community_id"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

export default SelectCommunityInput
