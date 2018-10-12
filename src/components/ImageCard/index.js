import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  imageCard: {
    overflow: 'unset',
    marginRight: '20px',
    marginLeft: '20px',
  },
};

const ImageCard = (props, height, width, name, price) => {
  const { classes } = props;

  const mediaStyle = {
    height: props.height,
    width: props.width,
  };

  return (
    <Card className={classes.imageCard}>
      <CardMedia
        style={mediaStyle}
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">
          {props.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ImageCard);
