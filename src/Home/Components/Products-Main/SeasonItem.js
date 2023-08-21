import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SeasonItem({ item, index }) {
    return (
        <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
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

                    <Button
                        style={{
                            marginTop: index === 1 ? '20px' : (index === 3 ? '20px' : undefined)
                        }}
                        size='small'>Order now</Button>
                </CardActions>
            </CardContent>

        </Card>
    )
}
export default SeasonItem;
