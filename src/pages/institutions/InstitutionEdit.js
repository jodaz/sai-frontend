import * as React from 'react'
import { institutionCreateValidations } from './institutionsValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box'
import LoadingIndicator from '../../components/LoadingIndicator'

const InstitutionEdit = () => {
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.put(`/institutions/${id}`, values)

            if (data) {
                navigate('/institutions')
                enqueueSnackbar(`¡Ha actualizado a la institución "${data.name}"!`, { variant: 'success' });
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [id])

    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/institutions/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    if (!record) return <LoadingIndicator />;

    return (
        <BaseForm
            save={save}
            validate={institutionCreateValidations}
            record={record}
            saveButtonLabel='Actualizar'
            title={`Editando institución #${record.id}`}
        >
            <InputContainer label='Título' xs={12} sm={6}>
                <TextInput
                    name="title"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default InstitutionEdit
