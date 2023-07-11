import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SeasonProductCardSecond() {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="140"
                height="160"
                image='https://i.ibb.co/s1ks8wP/image-8.jpg' />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mint
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Mint, a fragrant herb with a cool taste, has captivated cultures
                     worldwide for centuries.  Easy to grow and widely available.
                 </Typography>
                </CardContent>
             <CardActions>
                 <Button size='small'>Share</Button>
                 <Button size='small'>Order now</Button>
             </CardActions>
         
        </Card>
    )
}
export default SeasonProductCardSecond;