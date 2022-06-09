import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';

const SelectParishesInput = () => {
    const { 
        data, total
    } = useFetch('/parishes')

    if (!total) return null;

    return (
        <InputContainer label='Parroquia (s)'>
            <SelectInput
                multiple
                name="parishes"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

export default SelectParishesInput
