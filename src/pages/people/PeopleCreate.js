import * as React from 'react'
import { validateItem } from './peopleValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import SelectParishInput from './SelectParishInput';
import SelectCommunityInput from './SelectCommunityInput';
import { phoneFormat, identityCardFormat } from '../../formatters'

const PeopleCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/people', values)

            if (data) {
                navigate('/people')
                enqueueSnackbar(
                    `¡Ha registrado la persona "${data.name}"`, 
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
            title='Agregar persona'
            unresponsive
        >
            <InputContainer label='Nombre' md='6'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Nombre' md='6'>
                <TextInput
                    parse={identityCardFormat}
                    name="dni"
                    placeholder="V-12345678"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Nombre' md='6'>
                <TextInput
                    name="address"
                    placeholder="Calle Wallaby 42"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Teléfono' md='6'>
                <TextInput
                    parse={phoneFormat}
                    name="phone"
                    placeholder="(XXX) XXX-XXXX"
                    fullWidth
                />
            </InputContainer>
            <SelectParishInput />
            <SelectCommunityInput />
        </BaseForm>
    )
}

export default PeopleCreate
