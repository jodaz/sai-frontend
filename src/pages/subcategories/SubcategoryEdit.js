import * as React from 'react'
import { validateItem } from './subcategoryValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { useSnackbar } from 'notistack';
import SelectInput from '../../components/SelectInput'

const SubcategoryEdit = () => {
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()
    const [categories, setCategories] = React.useState([])
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.put(`/subcategories/${id}`, values)

            if (data) {
                navigate('/subcategories')
                enqueueSnackbar(`¡Ha actualizado la subcategoría "${data.name}"!`, { variant: 'success' });
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [id])

    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/subcategories/${id}`);

        setRecord(data);
    }, []);

    const fetchCategories = React.useCallback(async () => {
        const { data } = await axios.get('/categories')

        setCategories(data.data)
    }, [])

    React.useEffect(() => {
        fetchRecord()
        fetchCategories();
    }, [])

    if (!record) return null;

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            record={record}
            saveButtonLabel='Actualizar'
            title={`Editando rubro #${record.id}`}
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

export default SubcategoryEdit
