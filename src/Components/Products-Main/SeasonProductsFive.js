import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function SeasonProductCardFive() {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt='140'
                height="160"
                image='https://i.ibb.co/cxRpkrc/pexels-pixabay-144248.jpg' />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Potato
                </Typography>
                <Typography  variant='body2'  color="text.secondary">
                    Potatoes, versatile root vegetables with a rich and starchy texture,
                    have been a staple in various cuisines across the globe for generations.
                </Typography>
                <CardActions>
                    <Button size='small'>Info</Button>
                    <Button size='small'>Order now</Button>
                </CardActions>
            </CardContent>

        </Card>
    )
}
export default SeasonProductCardFive;
