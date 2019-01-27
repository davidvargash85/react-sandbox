import React from 'react';

const Validator = (props) => {
    const overLimit = props.size && props.size > 5;
    const text = overLimit ? 'Text long enough' : 'Text too small';
    const style = {color: overLimit ? 'green' : 'orangered'}
    return (
        <div>
            <p style={style}>{text}</p>
        </div>
    );

};

export default Validator;