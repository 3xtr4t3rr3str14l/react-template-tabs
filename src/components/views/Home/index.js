import React from 'react';

import ContentCard from '../../ContentCard';
import imageCollection from '../../../imageCollection';
import ImageCarousel from '../../ImageCarousel';

class Home extends React.Component {
  state = {};

  render() {
    const { classes, theme } = this.props;

    return (
      <ContentCard style={{ paddingBottom: '10px' }}>
        <ImageCarousel
          autoScroll
          overflow="visible"
          contentStyle={{
            justifyContent: 'space-around',
            margin: 'auto',
            width: '19%',
            display: 'grid',
          }}
          imageStyle={{
            height: 175,
            maxWidth: 300,
            width: '100%',
          }}
        />
      </ContentCard>
    );
  }
}

export default Home;
