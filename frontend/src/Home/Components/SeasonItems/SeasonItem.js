import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function SeasonItem({ item }) {
  return (
    <Card sx={{ maxWidth: 250, height: 400 }}>
      <CardMedia component="img" alt="140" height="160" image={item.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
        <CardActions style={{ marginTop: "35px" }}></CardActions>
      </CardContent>
    </Card>
  );
}
SeasonItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default SeasonItem;
