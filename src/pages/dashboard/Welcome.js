import Box from '@mui/material/Box'
import dtiLogo from '../../images/DTI2.png'
import mayorLogo from '../../images/mayorLogo.png'
import fundacionLogo from '../../images/fundacion.png'
import { useMediaQuery, useTheme } from '@mui/material'

const Strong = ({ children }) => (
    <Box component='span' sx={{
        color: theme => theme.palette.primary.main,
        fontWeight: 900
    }}>
        {children}
    </Box>
)

const Welcome = () => {
    const matches = useMediaQuery('(min-width:600px)');

    console.log(matches)
    return (
        <Box sx={{
            fontSize: '2rem',
            display: 'flex',
            backgroundColor: theme => theme.palette.secondary.main,
            width: '100%',
            padding: '2rem 1rem',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Box width='100%'>
                ¡Bienvenido al <Strong>S</Strong>istema de <Strong>A</Strong>tención <Strong>I</Strong>ntegral!
            </Box>
            <Box sx={{
                paddingTop: '2rem',
                width: '100%',
                alignContent: 'center',
                flexWrap: 'nowrap',
                '& > *': {
                    marginRight: '2rem'
                }
            }}>
                <img height='70rem' src={dtiLogo} />
                <img height='75rem' src={fundacionLogo} />
                <img height='100rem' src={mayorLogo} />
            </Box>
        </Box>
    )
}

export default Welcome