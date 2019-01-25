import React from 'react';
import { Image } from 'semantic-ui-react';
import jednorozec from '../img/jednorozec.jpg';
import './ImageExtra.css';
import Button from '../Button';


const ImageExampleImage = props =>
  <Image centered="true" className="padding" hidden={props.hidden} size="big" src={jednorozec} />;

export default ImageExampleImage;
