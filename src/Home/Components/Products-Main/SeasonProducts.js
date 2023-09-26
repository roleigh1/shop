import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from './Dialogs/ProductDialogOne';
function SeasonProductCardOne() {
    return (
        <Card sx={{ maxWidth: 250 , minHeight: 390 }}>
            <CardMedia
                component="img"
                alt="test"
                height="155"
                image="https://i.ibb.co/BzJtwyx/image-16.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Lettuces
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lettuces, with their crisp and refreshing leaves, are a versatile and nutritious 
                ingredient that adds a delightful crunch to salads and sandwiches.
                </Typography>
            </CardContent>
            <CardActions>
                <CustomizedDialogs />
                <Button size="small">Order now</Button>

            </CardActions>
        </Card>
    )
}

export default SeasonProductCardOne;