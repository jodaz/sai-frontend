import * as React from 'react'
import { validateItem } from './municipalityValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { useSnackbar } from 'notistack';

const MunicipalityEdit = () => {
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.put(`/municipalities/${id}`, values)

            if (data) {
                navigate('/municipalities')
                enqueueSnackbar(
                    `¡Ha la categoría "${data.name}"`, 
                    { variant: 'success' }
                );
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [id])

    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/municipalities/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    if (!record) return null;

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            record={record}
            saveButtonLabel='Actualizar'
            title={`Editando municipio #${record.id}`}
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default MunicipalityEdit
