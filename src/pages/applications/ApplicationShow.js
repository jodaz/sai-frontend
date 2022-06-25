import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '../../components/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PositionIcon from '@mui/icons-material/AccountBox';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import PendingIcon from '@mui/icons-material/PendingActions';
import RejectIcon from '@mui/icons-material/HighlightOff';
import StyleIcon from '@mui/icons-material/Style';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const PeopleShow = () => {
    const { dispatch } = useAdmin()
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const fetchRecord = React.useCallback(async () => {
        try {
            const { data } = await axios.get(`/applications/${id}`);
    
            setRecord(data)
        } catch (error) {
            console.log("error", error)
        }
        setLoading(false)
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    React.useEffect(() => {
        if (record) {
            setTitle(dispatch, `Solicitud #${record.num}`)
        }
    }, [record])

    if (loading) return <LoadingIndicator />;

    const { person, state, subcategory, ...rest } = record;

    return (
        <Box width='100%' height='100%'>
            <Box sx={{
                display: 'flex',
                backgroundColor: theme => theme.palette.secondary.main,
                padding: '1.5rem 1rem',
                borderRadius: 1,
                marginBottom: '2rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                }}>
                    <Box padding='1rem 0' textTransform='uppercase' fontWeight='600'>
                        Información de la solicitud
                    </Box>
                    <Box fontSize='1.1rem' fontWeight='600'>
                        {rest.title}
                    </Box>
                    {(rest.description) && (
                        <Box fontSize='1rem'>
                            {rest.description}
                        </Box>
                    )}
                    <Box width='100%' marginTop='1rem' display='flex' justifyContent= 'space-evenly'>
                        

                        {(state.id == '1') && (
                            <TextField
                                source={state.name}
                                icon={<PendingIcon />}
                            />
                        )}
                        
                        {(state.id == '2') && (
                            <TextField
                                source={state.name}
                                icon={<CheckIcon />}
                            />
                        )}

                        {(state.id == '3') && (
                         <TextField
                                source={state.name}
                                icon={<RejectIcon />}
                            />
                        )}

                        <TextField
                            source={subcategory.name}
                            icon={<StyleIcon />}
                            
                        />
                        {(rest.quantity) && (
                            <TextField
                                source={rest.quantity}
                                icon={<FormatListNumberedIcon />}
                                marginLeft='1rem'
                            />
                        )}
                    </Box>
                </Box>
            </Box>
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
                    <Box padding='1rem 0' textTransform='uppercase' fontWeight='600'>
                        Datos de la persona
                    </Box>
                    <Box fontSize='1.1rem' fontWeight='600'>
                        {person.name}
                    </Box>
                    <Box fontWeight='300' fontSize='0.9rem'>
                        {person.dni}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        '& > *': {
                            marginRight: '1rem'
                        }
                    }}>
                        <TextField
                            source={person.full_address}
                            icon={<LocationOnIcon />}
                        />
                        {person.phone && (
                            <TextField
                                source={person.phone}
                                icon={<LocalPhoneIcon />}
                            />
                        )}
                        {person.positions && (
                            <TextField
                                source={person.positions.name}
                                icon={<EmailIcon />}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PeopleShow
