import * as React from 'react'
import { validateItem } from './sectorValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import SelectCommunityInput from './SelectCommunityInput';
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

const SectorCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/sectors', values)

            if (data) {
                navigate('/sectors')
                enqueueSnackbar(
                    `¡Ha registrado el sector "${data.name}"`, 
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
            title='Agregar sector'
            unresponsive
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <SelectCommunityInput />
        </BaseForm>
    )
}

export default SectorCreate
