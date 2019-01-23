import React from 'react';
import { Image } from 'semantic-ui-react';
import jednorozec from '../img/jednorozec.jpg';
import './ImageExtra.css';


const ImageExampleImage= (props) =>
<Image src={jednorozec} hidden={props.hidden} size='big' className='padding' centered='true' />

export default ImageExampleImage