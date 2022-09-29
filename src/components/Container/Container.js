import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import './Container.css';
import Footer from '../Footer/Footer';

const Container=() => {
    const [trainers, setTrainer]=useState([])
    const [cart, setCart]=useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])

    const handleAddToList=(trainer) => {
        // console.log(trainer);
        const newCart=[...cart, trainer]
        setCart(newCart)
    }

    return (
        <div className='main-div'>
            <div className='main-container'>
                <div >
                    <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> YOUR-FITNESS SOLUTIONS</h1>
                    <h3>Choices your Trainer</h3>
                    <div className="aside-container">
                        {
                            trainers.map(trainer => <Aside key={trainer.id} trainer={trainer} handleAddToList={handleAddToList}></Aside>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
            <div className="blog">
                <Blog></Blog>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Container;
