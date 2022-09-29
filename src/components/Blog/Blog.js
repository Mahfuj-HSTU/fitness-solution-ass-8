import React from 'react';
import './Blog.css'

const Blog=() => {
    return (
        <div>
            <hr /><hr />
            <div className='blog-container'>
                <h3>How does react work?</h3>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM. <br /><br /> It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
            </div>
            <hr />
            <div className='blog-container'>
                <h3>Difference between props and state.</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <hr />
            <div className='blog-container'>
                <h3>Uses of useEffect without data load.</h3>
                <p>
                    <li><b>Running on state change:</b> Validating input field</li>
                    <li><b>Running on state change:</b> Live filtering</li>
                    <li><b>Running on state change:</b> Trigger animation on new array value</li>
                    <li><b>Running on props change:</b> Update paragraph list on fetched API data update</li>
                    <li><b>Running on props change:</b> Updating fetched API data to get BTC updated price</li>
                </p>
            </div>
            <hr /><hr />
        </div>
    );
};

export default Blog;
