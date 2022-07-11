import { createTheme } from '@mui/material/styles';
import { red, grey, blueGrey } from '@mui/material/colors';
import { esES } from '@mui/material/locale';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: red[500],
            },
            secondary: {
                main: grey[100]
            },
            text: {
                primary: blueGrey[900]
            }
        },
    },
    esES
);

export default theme;
