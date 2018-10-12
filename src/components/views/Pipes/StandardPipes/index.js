import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ContentCard from '../../../ContentCard';
import ImageCard from '../../../ImageCard';
import fishingPipe from '../../../../images/fishingPipe.jpg';

const styles = {
  imageGroup: {
    display: 'flex',
    paddingBottom: '40px',
    justifyContent: 'center',
  },
};

const StandardPipes = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Standard Pipes">
      <div className={classes.imageGroup}>
        <ImageCard
          height={200}
          width={265}
          title="Small Pipe"
          subtitle="$66"
          image={fishingPipe}
        />
        <ImageCard
          height={200}
          width={265}
          title="Medium Pipe"
          subtitle="$80"
          image={fishingPipe}
        />
        <ImageCard
          height={200}
          width={265}
          title="Large Pipe"
          subtitle="$120"
          image={fishingPipe}
        />
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(StandardPipes);
