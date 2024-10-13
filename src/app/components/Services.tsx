import {Box, Button, CardMedia, Typography, CardContent, Container} from '@mui/material';
import Grid from "@mui/material/Grid2";
import * as React from "react";

const commonStyles = {
    backgroundColor: 'white',
    m: 1,
    border: 0,
    width: 300,
    height: 250,
    borderRadius: 8,
    padding: 3,
    margin: 5
};


const servicesList = [
    {
        id: 1,
        name: 'Odontología Cosmética',
        image: 'https://github.com/vaniailka78/tarea2-magia-dental/blob/master/recursos/image%204.png?raw=true'
    },
    {
        id: 2,
        name: 'Odontología Restaurativa',
        image: "https://github.com/vaniailka78/tarea2-magia-dental/blob/master/recursos/image%203.png?raw=true"
    },
    {
        id: 3,
        name: 'Odontopediatría',
        image: 'https://github.com/vaniailka78/tarea2-magia-dental/blob/master/recursos/image%206.png?raw=true'
    },
    {
        id: 4,
        name: 'Ortodoncia',
        image: 'https://github.com/vaniailka78/tarea2-magia-dental/blob/master/recursos/image%205.png?raw=true'
    },
];


export function Services() {
    return (
        <Box sx={{ backgroundColor: '#d9d9e0', py: 6 }}>
            <Container maxWidth="xl">
                <Typography variant="h6" align="left" gutterBottom><b>Nuestros servicios</b></Typography>
            </Container>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {servicesList.map((service) => (
                    <Grid key={service.id}>
                        <Box sx={{ ...commonStyles}}>
                            <Grid
                                container
                                spacing={1}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                            <Grid>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    width="100"
                                    image={service.image}
                                    alt={service.name}
                                />
                            </Grid>
                            <Grid>
                                <CardContent>
                                    <Typography align={"center"} gutterBottom variant="h6" component="div">
                                        {service.name}
                                    </Typography>
                                    <Button sx={{
                                        padding: 1,
                                        margin: 2,
                                        color: '#386663',
                                        width: 200,
                                    }}><b>Más información ↗</b></Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
