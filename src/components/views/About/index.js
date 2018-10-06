import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ContentCard from '../../ContentCard';
import image from '../../../images/hibiscus.png';

const styles = {
  imageCard: {
    // maxWidth: '345px',
    margin: 'auto',
    width: '50%',
  },
  media: {
    height: 140,
  },
};

const About = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="About">
      <Card className={classes.imageCard}>
        <div>
          <CardMedia
            className={classes.media}
            image={image}
            title="Badass Pipe"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              The Pooka Air Bong
            </Typography>
            <Typography component="p">
              Bamboo grown in Texas, painted by DFW musicians and visual artists.
            </Typography>
          </CardContent>
        </div>
      </Card>
    </ContentCard>
  );
};

export default withStyles(styles)(About);
