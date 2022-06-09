import * as React from 'react'
import { validateItem } from './subcategoryValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import SelectCategoryInput from './SelectCategoryInput'

const ItemCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/subcategories', values)

            if (data) {
                navigate('/subcategories')
                enqueueSnackbar(`¡Ha registrado el rubro "${data.name}"`, { variant: 'success' });
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [])

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            title='Agregar subcategoría'
            unresponsive
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <SelectCategoryInput />
        </BaseForm>
    )
}

export default ItemCreate
