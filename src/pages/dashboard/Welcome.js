import Box from '@mui/material/Box'

const Welcome = () => {
    return (
        <Box sx={{
            fontSize: '2rem',
            display: 'flex',
            backgroundColor: theme => theme.palette.primary.main,
            width: '100%',
            color: theme => theme.palette.secondary.main, 
            padding: '1rem'
        }}>
            <Box>
                ¡Bienvenido al Sistema de Atención Integral!
            </Box>
        </Box>
    )
}

export default Welcome