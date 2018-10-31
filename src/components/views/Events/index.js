import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContentCard from '../../ContentCard';

const styles = {};

const Events = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Events">
      <iframe
        title="Event Calendar"
        src="https://calendar.google.com/calendar/embed?src=sehbtrabccmk4l45kpqjog5qik%40group.calendar.google.com&ctz=America%2FChicago"
        style={{ border: '0' }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </ContentCard>
  );
};

export default withStyles(styles)(Events);
