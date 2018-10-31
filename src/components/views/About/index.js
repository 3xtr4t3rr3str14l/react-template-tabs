import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageCard from '../../ImageCard';

import ContentCard from '../../ContentCard';
import amanda from '../../../images/facebook-pics/amanda.jpg';

const styles = {
  imageGroup: {
    display: 'flex',
    paddingBottom: '40px',
    justifyContent: 'center',
  },
};

const About = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="About">
      <div className={classes.imageGroup}>
        <ImageCard
          height={600}
          title="The Pooka Air Bong"
          subtitle="Bamboo grown in Texas, painted by DFW musicians and visual artists."
          image={amanda}
        />
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(About);
