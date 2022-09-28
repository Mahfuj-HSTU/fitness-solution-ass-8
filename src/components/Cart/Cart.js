import React from 'react';
import profile from '../../20200702_202732.jpg'
import './Cart.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart=({cart}) => {
    // console.log(cart)
    const showToastMessage=() => {
        toast.dark('Successfully Selected', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    let totalTime=0;

    for(const trainer of cart) {
        totalTime=totalTime+trainer.time;
    }

    return (
        <div className='cart'>
            {/* Profile section start*/}
            <div className="profile-container">
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className='detail'>
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

            {/* exercise section start*/}
            <div className="details">
                <h3>Exercise Details</h3>
                <div className='ex-time'>
                    <h4>Exercise Time : {totalTime} </h4>
                </div>
                <div className='br-time'>
                    <h4>Break Time :  </h4>
                </div>
            </div>
            {/* exercise section end */}

            <button onClick={showToastMessage} className='btn'>Selection Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Cart;
