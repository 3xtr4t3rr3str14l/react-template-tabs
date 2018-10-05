import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/views/Home';
import About from '../components/views/About';
// import Pipes from '../components/views/Pipes';
import StandardPipes from '../components/views/Pipes/StandardPipes';
import CustomPipes from '../components/views/Pipes/CustomPipes';
import ProShop from '../components/views/Pipes/ProShop';
import Swag from '../components/views/Swag';
import Contact from '../components/views/Contact';
import Events from '../components/views/Events';
import Gallery from '../components/views/Gallery';

const View = ({ viewType }) => (
  (viewType)
);

View.propTypes = {
  viewType: PropTypes.element.isRequired,
};

const viewList = {
  HOME: (<Home />),
  ABOUT: (<About />),
  STANDARD_PIPES: (<StandardPipes />),
  CUSTOM_PIPES: (<CustomPipes />),
  PRO_SHOP: (<ProShop />),
  SWAG: (<Swag />),
  CONTACT: (<Contact />),
  EVENTS: (<Events />),
  GALLERY: (<Gallery />),
};

const getVisibleView = (filter) => {
  const viewType = viewList[filter];
  return viewType;
};

const mapStateToProps = (state) => {
  const visibleView = getVisibleView(state.visibilityFilter);
  return {
    viewType: visibleView,
  };
};

const VisibleView = connect(
  mapStateToProps,
  null,
)(View);

export default VisibleView;
