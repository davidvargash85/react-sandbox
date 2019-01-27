import React from 'react';

const ToggleBtn = (props) => {

    const style = {
        backgroundColor: props.value ? 'orangered' : 'green',
    }

    return (
        <div>
            <button onClick={props.toggle} style={style}>Toggle</button>
        </div>
    );
}

export default ToggleBtn;