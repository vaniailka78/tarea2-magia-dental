import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from "react";
import Box from '@mui/material/Box';

const commonStyles = {
    backgroundColor: 'white',
    m: 1,
    border: 1,
    width: 300,
    height: 200,
    borderRadius: 8,
    padding: 3,
    margin: 5
};

const clientOpinions = [
    { id: 1, name: 'Lucia P.', comment: '"Excelente servicio en Brillo Dental. Trato amable, procedimientos indoloros. ¡Mi sonrisa nunca ha estado mejor!"' },
    { id: 2, name: 'Jorge E.', comment: '"En Magia Dental me sentí como en casa. Profesionales excepcionales y resultados sorprendentes. ¡Muy recomendado!"' },
    { id: 3, name: 'Sofia M.', comment: '"Magia Dental transformó mi sonrisa con eficiencia y cuidado. ¡El mejor dentista al que he ido!"' },
];

export function Opinions() {
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding={10}
        >
            <Container maxWidth="xl">
                <Typography variant="h6" align="left" gutterBottom><b>Opiniones de nuestros pacientes</b></Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={1} justifyContent="space-evenly">
                    {clientOpinions.map((opinion) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={opinion.id}>
                            <Box sx={{ ...commonStyles}}>
                                <Typography variant="body1" color="text.secondary">{opinion.comment}</Typography>
                                <Typography gutterBottom variant="h6">{opinion.name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
}