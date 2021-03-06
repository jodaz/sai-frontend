import * as React from 'react'
import { validateEditUser } from './userValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import { useParams } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'
import PasswordInput from '../../components/PasswordInput'
import { useSnackbar } from 'notistack';
import SelectRolesInput from './SelectRolesInput';
import SelectEntityInput from './SelectEntityInput';
import LoadingIndicator from '../../components/LoadingIndicator'

const UserEdit = () => {
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async values => {
        try {
            const { data } = await axios.put(`/users/${id}`, values)

            if (data) {
                navigate('/users')
                enqueueSnackbar(
                    `¡Ha actualizado el usuario "${data.login}"`, 
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
        const { data } = await axios.get(`/users/${id}`);
        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    if (!record) return <LoadingIndicator />;

    return (
        <BaseForm
            save={save}
            validate={validateEditUser}
            record={record}
            saveButtonLabel='Actualizar'
            title={`Editando usuario #${record.id}`}
        >
            <InputContainer label='Login'>
                <TextInput
                    name="login"
                    placeholder="Nombre de usuario"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Contraseña'>
                <PasswordInput
                    name="password"
                    placeholder="Contraseña"
                    fullWidth
                />
            </InputContainer>
            <SelectRolesInput name='roles' />
            <SelectEntityInput name='entity_id' />
        </BaseForm>
    )
}

export default UserEdit
