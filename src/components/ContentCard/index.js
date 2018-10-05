import React from 'react';
import Card from '@material-ui/core/Card';

const styles = {
  mainCard: {
    margin: 'auto',
    width: '50%',
    background: 'rgb(255, 255, 255, 0.4)',
  },
};

const ContentCard = props => (
  <Card style={styles.mainCard}>
    <div>
      {props.children}
    </div>
  </Card>
);

export default ContentCard;
