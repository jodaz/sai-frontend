import * as React from 'react'
import { institutionCreateValidations } from './institutionsValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { useSnackbar } from 'notistack';

const InstitutionCreate = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data, status } = await axios.post('institutions', {
                person_id: id,
                ...values
            });

            if (status >= 200 && status < 300) {
                navigate(`/institutions/${data.id}`)
                enqueueSnackbar(
                    `¡Ha registrado la institución "${data.num}"`, 
                    { variant: 'success' }
                );
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [id])

    return (
        <BaseForm
            save={save}
            validate={institutionCreateValidations}
            saveButtonLabel='Enviar'
            title='Nueva institución'
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

export default InstitutionCreate
