import * as React from 'react'
import InputContainer from '../../components/InputContainer'
import SelectInput from '../../components/SelectInput'
import useFetch from '../../hooks/useFetch';

const SelectCategoryInput = () => {
    const { 
        data, total
    } = useFetch('/categories')

    if (!total) return null;

    return (
        <InputContainer label='Categoría'>
            <SelectInput
                name="category_id"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

export default SelectCategoryInput
