
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#12140e',
        },
        info: {
            main: '#386663',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
    },
    components: {
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
                elevation: 0,
            }
        }

    }
});

export default theme;
