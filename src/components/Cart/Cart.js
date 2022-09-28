import React from 'react';
import profile from '../../20200702_202732.jpg'
import './Cart.css'

const Cart=() => {
    return (
        <div className='cart'>
            <div className="profile-container">
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className='details'>
                        <h4>Mahfujur Rahman</h4>
                        <p>Frontend Devloper</p>
                    </div>
                </div>
                <div className="info">
                    <div>
                        <h3>60<sub><small>kg</small></sub></h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>5.4<sub><small>ft</small></sub></h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>23<sub><small>years</small></sub></h3>
                        <p>Age</p>
                    </div>
                </div>
            </div>



            <div className="break"></div>
            <div className="details"></div>
        </div>
    );
};

export default Cart;
