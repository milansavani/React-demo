import React  from 'react';

const Scroll = (props) => {
    const { devStyle } = scrollStyle;
    return (
        <div style={devStyle}>
            {props.children}
        </div>
    );
};

export default Scroll;

const scrollStyle = {
    devStyle : {
        overflowY: 'scroll',
        border: '5px solid black',
        height: '500px'
    }
};

