import React from 'react';
import styles from './Greetings.module.css';

const Greetings = (props) => {
    
    let appStyles = [];
    if (props.count <= 2) {
      appStyles.push(styles.red);
    }
    if (props.count <= 1){
      appStyles.push(styles.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={appStyles.join(' ')}>Move constantly</p>

        </div>
    );
}

export default Greetings;