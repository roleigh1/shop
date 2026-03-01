import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


function SeasonItem({ item }) {
  return (
    <Card sx={{ maxWidth: 250, height: 400 }}>
      <CardMedia component="img" alt="140" 
      className="h-40" image={item.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
        <CardActions  className="mt-27" ></CardActions>
      </CardContent>
    </Card>
  );
}

export default SeasonItem;
