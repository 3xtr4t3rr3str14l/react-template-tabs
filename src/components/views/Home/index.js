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
        <div>Welcome!</div>
      </ContentCard>
    );
  }
}

export default Home;
