import React from 'react';
import './Aside.css'

const Aside=(props) => {
    const {name, picture, time, description, age}=props?.trainer;
    console.log(props.trainer)
    return (
        <div className='aside'>
            <img src={picture} alt="" />
            <div>
                <h3>Trainer Name: {name}</h3>
                <p>{description}</p>
                <h5>Age: {age}</h5>
                <h4>Time required : {time}s</h4>
                <button className="btn-cart"> <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Aside;
