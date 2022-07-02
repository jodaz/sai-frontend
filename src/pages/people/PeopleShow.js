import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '../../components/TextField';
import LinkIconButton from '../../components/LinkIconButton';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'
import PositionIcon from '@mui/icons-material/AccountBox';
import ApplicationList from '../applications/ApplicationList';

const PeopleShow = () => {
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
                borderRadius: 1,
                marginBottom: '1rem'
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
                        {record.positions[0].name && (
                            <TextField
                                source={record.positions[0].name }
                                icon={<PositionIcon />}
                            />
                        )}
                    </Box>
                </Box>
                <Box alignSelf='start'>
                    <LinkIconButton href={`/people/${record.id}/edit`} />
                </Box>
            </Box>
            <ApplicationList initialValues={{ person_id: id }} createButton/>
        </Box>
    )
}

export default PeopleShow
