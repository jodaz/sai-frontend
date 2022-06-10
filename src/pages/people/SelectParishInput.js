import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';

const SelectParishInput = () => {
    const { 
        data, total
    } = useFetch('/parishes')

    if (!total) return null;

    return (
        <InputContainer label='Parroquia' md={3}>
            <SelectInput
                name="parish_id"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

export default SelectParishInput
