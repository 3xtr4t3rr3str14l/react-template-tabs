import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContentCard from '../../../ContentCard';
import hibiscus from '../../../../images/hibiscus.png';

const styles = {
  hibiscus: {
    width: '15%',
    height: '15%',
    padding: '15px',
  },
  imageCard: {
    // maxWidth: '345px',
    overflow: 'unset',
    marginRight: '20px',
    marginLeft: '20px',
  },
  media: {
    height: 140,
  },
  imageGroup: {
    display: 'flex',
    paddingBottom: '40px',
  },
};

const imageCard = (props, name, price) => {
  const { classes } = props;

  return (
    <Card className={classes.imageCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hibiscus}
          title="Badass Pipe"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const StandardPipes = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Standard Pipes">
      <div className={classes.imageGroup}>
        {imageCard(props, 'Small Pipe', '$66')}
        {imageCard(props, 'Medium Pipe', '$80')}
        {imageCard(props, 'Large Pipe', '$120')}
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(StandardPipes);
