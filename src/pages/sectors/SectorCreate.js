import * as React from 'react'
import { validateItem } from './sectorValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import axios from '../../api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

const SectorCreate = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [communities, setCommunities] = React.useState([])

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

    const fetchCommunities = React.useCallback(async () => {
        const { data } = await axios.get('/communities')

        setCommunities(data.data)
    }, [])

    React.useEffect(() => {
        fetchCommunities();
    }, []);

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
            <InputContainer label='Communidad'>
                <SelectInput
                    name='community_id'
                    placeholder='Communidad'
                    options={communities}
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default SectorCreate
