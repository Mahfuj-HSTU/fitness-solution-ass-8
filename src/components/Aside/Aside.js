import React from 'react';
import './Aside.css'

const Aside=(props) => {
    const {name, picture, time, description}=props?.trainer;
    console.log(props.trainer)
    return (
        <div className='aside'>
            <img src={picture} alt="" />
            <div>
                <h3>Trainer Name: {name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Aside;
