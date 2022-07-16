import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '../../components/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import PendingIcon from '@mui/icons-material/PendingActions';
import RejectIcon from '@mui/icons-material/HighlightOff';
import StyleIcon from '@mui/icons-material/Style';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Grid from '@mui/material/Grid'
import Button from '../../components/ButtonLink'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <Grid container spacing='8'>
            <Grid item sm='12' md='4'>
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
                            Solicitante
                        </Box>
                        <Box marginBottom='1rem'>
                            <Box fontSize='1.1rem' fontWeight='600'>
                                {person.name}
                            </Box>
                            <Box fontWeight='300' fontSize='0.9rem'>
                                C.I: {person.dni}
                            </Box>
                        </Box>
                        <Grid container spacing='12'>
                            <Grid item>
                                <TextField
                                    source={person.full_address}
                                    icon={<LocationOnIcon />}
                                />
                            </Grid>
                            {person.phone && (
                                <Grid item>
                                    <TextField
                                        source={person.phone}
                                        icon={<LocalPhoneIcon />}
                                    />
                                </Grid>
                            )}
                            {person.positions && (
                                <Grid item>
                                    <TextField
                                        source={person.positions.name}
                                        icon={<EmailIcon />}
                                    />
                                </Grid>
                            )}
                        </Grid>
                        <Box sx={{
                            display: 'flex', 
                            width: '100%', 
                            justifyContent: 'center', 
                            padding: '1rem'
                        }}>
                            <Button
                                variant="outlined"
                                startIcon={<ArrowForwardIcon />} 
                                fullWidth
                                to={`/people/${person.id}`}
                            >
                                Ver perfil
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm='12' md='8'>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: theme => theme.palette.secondary.main,
                    padding: '1.5rem 1rem',
                    borderRadius: 1,
                    marginBottom: '2rem',
                    width: '100%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1'
                    }}>
                        <Box padding='1rem 0' textTransform='uppercase' fontWeight='600'>
                            Información de la solicitud
                        </Box>
                        <Box marginBottom='1rem'>
                            <Box fontSize='1.1rem' fontWeight='600'>
                                {rest.title}
                            </Box>
                            {(rest.description) && (
                                <Box fontSize='1rem'>
                                    {rest.description}
                                </Box>
                            )}
                        </Box>
                        <Grid container spacing='12'>
                            {(state.id == '1') && (
                                <Grid item>
                                    <TextField
                                        source={state.name}
                                        icon={<PendingIcon />}
                                    />
                                </Grid>
                            )}
                            {(state.id == '2') && (
                                <Grid item>
                                    <TextField
                                        source={state.name}
                                        icon={<CheckIcon />}
                                    />
                                </Grid>
                            )}
                            {(state.id == '3') && (
                                <Grid item>
                                    <TextField
                                        source={state.name}
                                        icon={<RejectIcon />}
                                    />
                                </Grid>
                            )}
                            <Grid item xs='12'>
                                <TextField
                                    source={`${subcategory.category.name}, ${subcategory.name}`}
                                    icon={<StyleIcon />}
                                />
                            </Grid>
                            {(rest.quantity) && (
                                <Grid item>
                                    <TextField
                                        source={`${rest.quantity} elemento(s)`}
                                        icon={<FormatListNumberedIcon />}
                                        marginLeft='1rem'
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PeopleShow
