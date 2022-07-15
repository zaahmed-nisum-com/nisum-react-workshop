import React, { useState } from 'react';
import PropTypes from 'prop-types';


function UserCreate(props) {
    const [name, setName] = useState('')
    console.log(props)
    return (
        <div>
            <p>{props.heading}</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button>Submit</button>
        </div>
    );
}

UserCreate.propTypes = {
    heading: PropTypes.string,
};

UserCreate.defaultProps = {
    heading: 'heading'
}

export default UserCreate;