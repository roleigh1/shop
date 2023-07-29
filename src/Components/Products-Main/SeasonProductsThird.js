import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedDialogs3 from './Dialogs/ProductDialogThird';
function SeasonProductCardThird(){
    return ( 
        <Card sx={{ maxWidth: 250 , minHeight: 400 }}>
        <CardMedia
            component="img"
            alt="140"
            height="160"
            image='https://i.ibb.co/qDxhs6P/cherry-bush-tomatoes-healthy-vegetables-healthy-food-beautiful-fresh-red-tomatoes-twig.jpg'>

            </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Tomato
            </Typography>
            <Typography variant='body2' color="text.secondary">
             Ripe and juicy, tomatoes bring a burst of tanginess and vibrant color to a wide array of salads,.
              sauces, and countless delicious dishes.
             </Typography>
            </CardContent>
         <CardActions style={{marginTop: '19px'}}>
             <CustomizedDialogs3 />
             <Button size='small'>Order now</Button>
         </CardActions>
     
    </Card>
    )
}
export default SeasonProductCardThird;