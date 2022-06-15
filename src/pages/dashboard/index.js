import Box from '@mui/material/Box'
import React from 'react'
import { setTitle, useAdmin } from '../../context/AdminContext'
import Welcome from './Welcome'
import Statistics from './Statistics'

const Dashboard = () => {
    const { dispatch } = useAdmin()

    React.useEffect(() => {
        setTitle(dispatch, 'Inicio')
    }, [])

    return (
        <Box display='flex' width='100%' flexDirection='column'>
            <Welcome />
            <Statistics />
        </Box>
    )
}

export default Dashboard