import React from 'react';
import './ToggleBtn.module.css';

const ToggleBtn = (props) => {

    // const style = {
    //     backgroundColor: props.value ? 'orangered' : 'green',
    // }

    return (
        <div>
            <button onClick={props.toggle}>Toggle</button>
        </div>
    );
}

export default ToggleBtn;