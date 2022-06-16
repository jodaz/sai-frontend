import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '../../components/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LinkIconButton from '../../components/LinkIconButton';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'

const PeopleShow = props => {
    const { dispatch } = useAdmin()
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)

    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/people/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    React.useEffect(() => {
        if (record) {
            setTitle(dispatch, `Persona #${record.id}`)
        }
    }, [record])

    if (!record) return <LoadingIndicator />;

    return (
        <Box width='100%' height='100%'>
            <Box sx={{
                display: 'flex',
                backgroundColor: theme => theme.palette.secondary.main,
                padding: '1.5rem 1rem',
                borderRadius: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                }}>
                    <Box fontSize='1.1rem' fontWeight='600'>
                        {record.name}
                    </Box>
                    <Box fontWeight='300' fontSize='0.9rem'>
                        {record.dni}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        '& > *': {
                            marginRight: '1rem'
                        }
                    }}>
                        <TextField
                            source={record.full_address}
                            icon={<AssignmentIndIcon />}
                        />
                        {record.phone && (
                            <TextField
                                source={record.phone}
                                icon={<LocalPhoneIcon />}
                            />
                        )}
                        {record.email && (
                            <TextField
                                source={record.email}
                                icon={<EmailIcon />}
                            />
                        )}
                    </Box>
                </Box>
                <Box alignSelf='start'>
                    <LinkIconButton href={`/people/${record.id}/edit`} />
                </Box>
            </Box>
        </Box>
    )
}

export default PeopleShow
