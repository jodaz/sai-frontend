import * as React from 'react'
import { validateItem } from './subcategoryValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import SelectInput from '../../components/SelectInput'

const ItemCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [categories, setCategories] = React.useState([])

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

    const fetchCategories = React.useCallback(async () => {
        const { data } = await axios.get('/categories')

        setCategories(data.data)
    }, [])

    React.useEffect(() => {
        fetchCategories()
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
            <InputContainer label='Categoría'>
                <SelectInput
                    name='category_id'
                    placeholder='Categoría'
                    options={categories}
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

ItemCreate.defaultProps = {
    basePath: 'items',
    resource: 'items'
}

export default ItemCreate
