import Box from '@mui/material/Box'
import React from 'react'
import StatsBox from '../../components/StatsBox'
import SupportIcon from '@mui/icons-material/Support';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import axios from '../../api'
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
    },
}));

const initialState = {
    applications: 0,
    people: 0
}

const Statistics = () => {
    const [state, setState] = React.useState(initialState)

    const fetchStatistics = React.useCallback(async () => {
        const { data } = await axios.get(`statistics`)

        setState(data)
    }, []);

    React.useEffect(() => {
        fetchStatistics();
    }, [])

    const { applications, people } = state;

    return (
        <Box marginTop='2rem'>
            <Box fontWeight='600' width='100%' fontSize='1.5rem'>
                Estadísticas
            </Box>
            <Container>
                <StatsBox
                    total={applications}
                    title='Solicitudes'
                    to='/applications'
                    icon={
                        <SupportIcon
                            color='primary' 
                            sx={{
                                fontSize: '70px'
                            }} 
                        />
                    }
                />
                <StatsBox
                    title='Personas'
                    to='/people'
                    total={people}
                    icon={
                        <EmojiPeopleIcon
                            color='primary' 
                            sx={{
                                fontSize: '70px'
                            }} 
                        />
                    }
                />
            </Container>
        </Box>
    )
}

export default Statistics