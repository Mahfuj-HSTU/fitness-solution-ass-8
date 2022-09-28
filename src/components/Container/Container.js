import React, {useEffect, useState} from 'react';
import Aside from '../Aside/Aside';
import Cart from '../Cart/Cart';
import './Container.css';

const Container=() => {
    const [trainers, setTrainer]=useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])


    return (
        <div className='main-container'>
            <div >
                <h1>YOUR-FITNESS SOLUTIONS</h1>
                <h3>Choices your Trainer</h3>
                <div className="aside-container">
                    {
                        trainers.map(trainer => <Aside key={trainer.id} trainer={trainer}></Aside>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Container;
