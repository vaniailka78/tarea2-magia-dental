import {AppBar, Toolbar, Typography, Button, CardMedia} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import * as React from "react";
import Grid from "@mui/material/Grid2";

export function Header() {
    return (
        <AppBar position="static" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Grid>
                    <CardMedia
                        component="img"
                        height="80"
                        width="80"
                        image='https://github.com/vaniailka78/tarea2-magia-dental/blob/main/recursos/image%201.png?raw=true'
                        alt='logo'
                    />
                </Grid>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Typography variant="body1">
                    <b>Magia dental</b>
                    </Typography>
                    <Typography variant="body1">
                     Clínica odontológica
                    </Typography>
                </Typography>
                <Button color="inherit">Nosotros</Button>
                <Button color="inherit">Servicios</Button>
                <Button color="inherit">Nuevos Pacientes</Button>
                <Button color="inherit">Contacto</Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Button>
                    <DarkModeOutlinedIcon fontSize="large" color="info"/>
                </Button>
                <Button sx={{
                    backgroundColor: '#386663',
                    borderRadius: 10,
                    padding: 2,
                    margin:2,
                    alignItems: 'left',
                }}>Reservar
                </Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}