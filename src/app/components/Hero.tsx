import {Typography, Button, Container, CardMedia} from '@mui/material';
import Grid from "@mui/material/Grid2";
import * as React from "react";

export function Hero() {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding={10}
        >
            <Container maxWidth="sm">
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        Clínica odontológica especialiada
                    </Typography>
                    <Typography component="h1" variant="h2" align="left" color="text.primary" gutterBottom>
                        Atención para todas las edades
                    </Typography>
                    <Button sx={{
                        backgroundColor: '#386663',
                        borderRadius: 10,
                        padding: 2,
                        margin:2,
                        alignItems: 'left',
                    }}>Reserva en línea
                    </Button>
                    <Typography variant="body2" align="left" color="text.secondary" paragraph>
                        o llama al 800-10-01-02
                    </Typography>
            </Container>
            <Container maxWidth="md">
                <CardMedia
                    component="img"
                    height="420"
                    width="500"
                    image='https://github.com/vaniailka78/tarea2-magia-dental/blob/main/recursos/image%202.png?raw=true'
                    alt='HeroImage'
                />
            </Container>
        </Grid>


       /* */
    );
}