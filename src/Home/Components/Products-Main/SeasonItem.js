import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function SeasonItem({ item, index }) {
    return (
        <Card sx={{ maxWidth: 250, height: 400 }}>
            <CardMedia
                component="img"
                alt='140'
                height="160"
                image={item.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    {item.text}
                </Typography>
                <CardActions style={{ marginTop: '35px' }}>

                  
                </CardActions>
            </CardContent>
        </Card>
    ); console.log("")
}
export default SeasonItem;
