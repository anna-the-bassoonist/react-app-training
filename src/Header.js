import React from 'react';

const Header = (props) => {
    return <div><h2> Welcome {props.name}</h2>
    <h3>Now is {new Date().toLocaleTimeString()}</h3>
    </div>
}
//setInterval(new Date(), 1000);

export default Header;