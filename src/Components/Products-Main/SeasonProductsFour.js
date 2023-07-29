import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SeasonProductCardFour() {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="test"
                height="150"
                image="https://i.ibb.co/7Wh8xhJ/apple-1327789.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Apple
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lettuces, with their crisp and refreshing leaves, are a versatile and nutritious 
                ingredient that adds a delightful crunch to salads and sandwiches.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Info</Button>
                <Button size="small">Order now</Button>

            </CardActions>
        </Card>
    )
}

export default SeasonProductCardFour