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
    image='https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343_960_720.jpg'
    header={props.header}
    meta={props.meta}
    decscription={props.description}
    extra={extra}
/>
)

export default CardExampleCardProps