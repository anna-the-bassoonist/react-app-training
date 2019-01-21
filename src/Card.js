import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
<a href=''>
    <Icon name='user' />
    54 Followers
</a>
)

const CardExampleCardProps = (props) => (
<Card
    image={props.image}
    header={props.header}
    meta={props.meta}
    decscription={props.description}
    extra={extra}
/>
)

export default CardExampleCardProps