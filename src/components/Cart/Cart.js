import React from 'react';
import profile from '../../20200702_202732.jpg'
import './Cart.css'

const Cart=() => {
    return (
        <div className='cart'>
            {/* Profile section start*/}
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
            {/* profile section end */}

            {/* break section start */}
            <div className="break">
                <h3>Add a Break</h3>
                <div className="break-btn">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            {/* break section end */}
            <div className="details"></div>
        </div>
    );
};

export default Cart;
