import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/views/Home';
import About from '../components/views/About';
// import Pipes from '../components/views/Pipes';
// import Swag from '../components/views/Swag';
// import Contact from '../components/views/Contact';
// import Events from '../components/views/Events';
import Gallery from '../components/views/Gallery';

const View = ({ viewType }) => (
  (viewType)
);

View.propTypes = {
  viewType: PropTypes.element.isRequired,
};

const viewList = {
  HOME: (<Home />),
  ABOUT: (<div>ABOUT</div>),
  PIPES: (<div>PIPES</div>),
  SWAG: (<div>SWAG</div>),
  CONTACT: (<div>CONTACT</div>),
  EVENTS: (<div>EVENTS</div>),
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
