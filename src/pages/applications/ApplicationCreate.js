import * as React from 'react'
import { applicationCreateValidation } from './applicationsValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import SelectCategoryInput from '../../forms/SelectCategoryInput'
import { useSnackbar } from 'notistack';
import SelectSubcategoryInput from './SelectSubcategoryInput'

const ApplicationCreate = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('applications', {
                person_id: id,
                ...values
            });

            if (data) {
                navigate(`/people/${id}`)
                enqueueSnackbar(
                    `¡Ha registrado la solicitud "${data.num}"`, 
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
            validate={applicationCreateValidation}
            saveButtonLabel='Enviar'
            title={`Nueva solicitud`}
        >
            <InputContainer label='Título' xs={12} sm={6}>
                <TextInput
                    name="title"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Cantidad' xs={12} sm={6}>
                <TextInput
                    name="quantity"
                    type='number'
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Descripción' xs={12} md={12}>
                <TextInput
                    name="description"
                    multiline
                    fullWidth
                />
            </InputContainer>
            <SelectCategoryInput />
            <SelectSubcategoryInput />
        </BaseForm>
    )
}

export default ApplicationCreate
