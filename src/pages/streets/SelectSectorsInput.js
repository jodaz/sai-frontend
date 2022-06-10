import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';

const SelectSectorsInput = () => {
    const { 
        data, total
    } = useFetch('/sectors')

    if (!total) return null;

    return (
        <InputContainer label='Sector (es)'>
            <SelectInput
                multiple
                name="sectors"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

export default SelectSectorsInput