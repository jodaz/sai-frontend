import * as React from 'react'
import { validateItem } from './streetValidations';
import BaseForm from '../../components/BaseForm'
import InputContainer from '../../components/InputContainer'
import TextInput from '../../components/TextInput'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { useSnackbar } from 'notistack';
import SelectSectorsInput from './SelectSectorsInput'
import LoadingIndicator from '../../components/LoadingIndicator'

const StreetEdit = () => {
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.put(`/streets/${id}`, values)

            if (data) {
                navigate('/streets')
                enqueueSnackbar(
                    `¡Ha editado la calle "${data.name}"`, 
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
        const { data } = await axios.get(`/streets/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    if (!record) return <LoadingIndicator />;

    return (
        <BaseForm
            save={save}
            validate={validateItem}
            record={record}
            saveButtonLabel='Actualizar'
            title={`Editando calle #${record.id}`}
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <SelectSectorsInput />
        </BaseForm>
    )
}

export default StreetEdit
