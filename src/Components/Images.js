import React from 'react';
import { Image } from 'semantic-ui-react';
import flower from './img/flower.jpg';
import lion from './img/lion.jpg';
import tree from './img/tree.jpg';

const ImageExampleGroupSize = () => (
  <div>
    <Image.Group size="medium">
      <Image src={flower} />
      <Image src={lion} />
      <Image src={tree} />
    </Image.Group>
  </div>
);

export default ImageExampleGroupSize;
