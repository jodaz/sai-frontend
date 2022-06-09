import * as React from 'react'
import { validateItem } from './communityValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import useFetch from '../../hooks/useFetch';

const SelectParishesInput = () => {
    const { 
        data, total
    } = useFetch('/parishes')

    if (!total) return null;

    return (
        <InputContainer label='Parroquia (s)'>
            <SelectInput
                name="parishes"
                placeholder="Nombre"
                fullWidth
                options={data}
            />
        </InputContainer>
    )
}

const CommunityCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/communities', values)

            if (data) {
                navigate('/communities')
                enqueueSnackbar(
                    `¡Ha registrado la comunidad "${data.name}"`, 
                    { variant: 'success' }
                );
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
            title='Agregar paroquia'
            unresponsive
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <SelectParishesInput />
        </BaseForm>
    )
}

export default CommunityCreate
