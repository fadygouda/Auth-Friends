import React from 'react';

const Friend = (props) => {
    const {name, age, email} = props;
    return (
        <div className="friend-card">
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    );
};

export default Friend; 