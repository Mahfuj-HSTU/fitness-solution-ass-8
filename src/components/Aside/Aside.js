import React from 'react';
import './Aside.css'

const Aside=(props) => {
    const {name, picture, time, description, age}=props?.trainer;
    // console.log(props.trainer)


    return (
        <div className='aside'>
            <img src={picture} alt="" />
            <div>
                <h2>Trainer Name: {name}</h2>
                <p>{description}</p>
                <h5>Age: {age}</h5>
                <h4>Time required : {time}s</h4>
                <button onClick={() => props.handleAddToList(props?.trainer)} className="btn-cart"> <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Aside;
