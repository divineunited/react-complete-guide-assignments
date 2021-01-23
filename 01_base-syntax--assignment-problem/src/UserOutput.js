import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Use Props to display username: {props.username}</p>
            <p>Use Props to display password: {props.password}</p>
        </div>
    )
}

export default userOutput;