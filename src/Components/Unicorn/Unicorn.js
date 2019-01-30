import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import jednorozec from '../img/jednorozec.jpg';
import './Unicorn.css';
// import Button from '../Button';


const ImageExampleImage = (props) => {
  return (
    <Image centered="true" className="padding" hidden={props.clicks} size="big" src={jednorozec} />

  );
};

ImageExampleImage.PropTypes= {
  clicks: PropTypes.number,
};
export default ImageExampleImage;
