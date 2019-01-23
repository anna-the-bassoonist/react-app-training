import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <a href="google.pl">
    <Icon name="user" />
    54 Followers
  </a>
);

const CardExampleCardProps = props => (
  <Card
    decsription={props.description}
    extra={extra}
    header={props.header}
    image={props.image}
    meta={props.meta}
  />
);

export default CardExampleCardProps;
