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
import SelectSectorInput from './SelectSectorInput';
import SelectStreetInput from './SelectStreetInput';
import Box from '@mui/material/Box'

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
            <Box fontSize='1.5rem' fontWeight={900} width='100%' paddingTop='2rem'>
                Datos generales
            </Box>
            <InputContainer label='Nombre' md='6'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Cédula' md='3'>
                <TextInput
                    parse={identityCardFormat}
                    name="dni"
                    placeholder="V-12345678"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Teléfono' md='3'>
                <TextInput
                    parse={phoneFormat}
                    name="phone"
                    placeholder="(XXX) XXX-XXXX"
                    fullWidth
                />
            </InputContainer>
            <Box fontSize='1.5rem' fontWeight={900} width='100%' padding='1rem 0'>
                Dirección
            </Box>
            <SelectParishInput />
            <SelectCommunityInput />
            <SelectSectorInput />
            <SelectStreetInput />
            <InputContainer label='Dirección exacta' md='12'>
                <TextInput
                    name="address"
                    placeholder="Calle Wallaby 42"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default PeopleCreate
