import React from 'react';

const Greetings = (props) => {
    
    let appStyles = [];
    if (props.count <= 2) {
      appStyles.push('red');
    }
    if (props.count <= 1){
      appStyles.push('bold');
    }

    return (
        <div>
            <h1>Move constantly</h1>
            <p className={appStyles.join(' ')}>Go up and forward...</p>
        </div>
    );
}

export default Greetings;