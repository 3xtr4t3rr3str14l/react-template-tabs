import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContentCard from '../../ContentCard';
import ImageCard from '../../ImageCard';
import accessoriesImg from '../../../images/stockAccessories.jpeg';
import hatImg from '../../../images/stockHat.jpeg';
import jewelryImg from '../../../images/stockJewelry.jpeg';
import shirtImg from '../../../images/stockShirt.jpeg';

const styles = {
  imageGroup: {
    display: 'flex',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    justifyContent: 'center',
  },
};

const Swag = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Swag">
      <Typography component="p">
        <div className={classes.imageGroup}>
          <ImageCard
            title="Jewelry"
            height={140}
            width={165}
            image={jewelryImg}
          />
          <ImageCard
            title="Shirts"
            height={140}
            width={165}
            image={shirtImg}
          />
          <p />
          <ImageCard
            title="Hats"
            height={140}
            width={165}
            image={hatImg}
          />
          <ImageCard
            title="Accessories"
            height={140}
            image={accessoriesImg}
          />
        </div>
        <strong><a href="tel:469-863-6271">Call us</a> or <a href="mailto:wjm3@cawb.com">Email us</a> for pricing/availability!</strong>
      </Typography>
    </ContentCard>
  );
};

export default withStyles(styles)(Swag);
